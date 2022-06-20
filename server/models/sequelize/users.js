module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    users.associate = (models) => {
      users.hasMany(models.pick, {
        onDelete: "cascade",
        foreignKey : "user_id"
      });
    }
    return users;
  };