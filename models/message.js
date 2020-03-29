module.exports = function(sequelize, DataTypes){
    var Message = sequelize.define("Message", {
        name: DataTypes.STRING,
        message: DataTypes.STRING,
    });
    return Message;
}