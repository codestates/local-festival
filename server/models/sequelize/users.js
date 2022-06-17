module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
      user_id: {
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
    
  
    return users;
  };