module.exports = {
  // SGBD utilizado pela aplicação
  dialect: 'postgres',
  // Host do SGBD
  host: 'localhost',
  // Credenciais do SGBD
  username: 'postgres',
  password: 'docker',
  // Nome do database criado para a aplicação
  database: 'sequelizecrud',
  define: {
    // Define as colunas createdAt e updatedAt para todos os registros cridos no banco de dados
    timestamps: true,
    // Para utilizar a padronização de nomeação de tabelas
    underscored: true,
    // Para utilizar a padronização de nomeação de colunas e relacionamentos
    underscoredAll: true,
  },
};
