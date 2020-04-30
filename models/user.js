module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
          user: {
              type: DataTypes.STRING,
              primaryKey: true,
          },
          firstname: DataTypes.STRING,
          lastname: DataTypes.STRING,
          email: DataTypes.STRING,
          password: DataTypes.STRING,
      },
      {
          freezeTableName: true,
      }
  );
  return User;
}