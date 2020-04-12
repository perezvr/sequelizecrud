import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be 6 characters at least'),
      });

      await schema.validate(req.body);

      if (await User.findOne({ where: { email: req.body.email } }))
        return res.status(400).json({ error: 'User already exists' });

      const { id, name, email } = await User.create(req.body);

      return res.json({
        id,
        name,
        email,
      });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  async update(req, res) {
    return res.status(400).json({ message: 'Not implemented yet' });
  }

  async get(req, res) {
    if (!req.params.id) res.status(400).json({ error: 'Unidentified user' });

    const users = await User.findOne({
      where: { id: req.params.id, active: true },
    });

    return res.json(users);
  }

  async list(req, res) {
    const { page = 1 } = req.query;

    const where = {};

    where.active = true;

    if (req.params.id) where.id = req.params.id;

    const totalCount = await User.count({
      active: true,
    });

    const users = await User.findAll({
      where,
      limit: 20,
      offset: (page - 1) * 20,
    });

    res.header('X-Total-Count', totalCount);

    return res.json(users);
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(400).json({ error: 'User does not exists' });

    if (!user.active)
      return res.status(400).json({ error: 'User is already inactive' });

    user.active = false;

    await user.save();

    return res.json(user);
  }
}

export default new UserController();
