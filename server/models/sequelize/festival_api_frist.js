module.exports = (sequelize, DataTypes) => {
    let festival_api_first1 = sequelize.define("festival_api_first1", {
        content_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_date : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      end_date : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel : {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    festival_api_first1.associate = (models) => {
        festival_api_first1.hasMany(models.pick, {
          onDelete: "cascade",
          foreignKey : "festival_id"
        });
      }

    return festival_api_first1;
  };