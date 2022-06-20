module.exports = (sequelize, DataTypes) => {

    const pick = sequelize.define("pick");
    
    pick.associate = (models) => {
        pick.belongsTo(models.users, {
            onDelete: "cascade",
            foreignKey : "user_id"
        });
        pick.belongsTo(models.festival_api_first1, {
            onDelete: "cascade",
            foreignKey : "festival_id"
        });
    }
    

    return pick;
};