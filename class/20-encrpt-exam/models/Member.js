const UserModel = (sequelize, DataTypes)=>{
    const User = sequelize.define(
        'member_exam',{
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            pw: {
                type: DataTypes.STRING(511),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(15),
                allowNull: false
            },
            userid: {
                type: DataTypes.STRING(15),
                allowNull: false
            }
        }
    )
    return User;
}
module.exports = UserModel;