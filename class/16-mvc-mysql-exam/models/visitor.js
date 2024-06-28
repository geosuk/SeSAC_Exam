const visitorModel = (sequelize, DataTypes)=>{
    const Visitor = sequelize.define(
        'Visitor',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allwoNull: true
            },
            comment: {
                type: DataTypes.TEXT('medium'),
                allowNull: true
            }
        }
    );
    return Visitor;
}
module.exports = visitorModel