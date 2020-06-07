module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('user', {
        uid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: true,
            defaultValue: DataTypes.UUIDV1
        },
        user: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    });
    return User;
}