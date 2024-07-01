const userModel = (sequelize, DataTypes)=>{
    const User = sequelize.define(
        'User_exam',
        {
            user_id: {
                type:DataTypes.STRING(33),
                primaryKey: true,
                allowNull: false
            },
            user_pw: {
                type: DataTypes.STRING(33),
                allowNull: false
            }
        },
        {
            freezeTableName: true
        });
        return User;
}
module.exports = userModel;