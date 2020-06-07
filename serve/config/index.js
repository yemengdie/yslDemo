var all = {
    sequelize: {
        username: 'root',
        password: 'root',
        database: 'vueDemo',
        host: 'localhost',
        dialect: 'mysql',
        define: {
            underscored: true,
            timestamps: false,
            paranoid: false
        }
    }
};
module.exports = all;