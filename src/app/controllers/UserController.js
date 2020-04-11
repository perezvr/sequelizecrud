import User from '../models/User';

class UserController {
  async create(req, res) {
    // const schema =
    if (await User.findOne({ where: { email: req.body.email } }))
      return res.status(400).json({ error: 'User already exists' });

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(400).json({ error: 'User does not exists' });

    user.active = false;

    await user.save();

    return res.json(user);
  }
}

export default new UserController();
