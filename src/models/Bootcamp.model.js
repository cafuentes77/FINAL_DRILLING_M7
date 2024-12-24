import { Model, DataTypes } from 'sequelize'

export class Bootcamp extends Model {}

export const initBootcamp = (dbConfig) => {
    Bootcamp.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'El campo Bootcamp no puede estar vacío'},
                len: { 
                    args: [2, 100], 
                    msg: 'El campo Bootcamp debe tener entre 2 y 100 caracteres'}
            }
        },
        cue: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                notEmpty: { msg: 'El campo CUE no puede estar vacío'},
                min: 5,
                max: 10
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'El campo descripción no puede estar vacío'},
                len: { 
                    args: [2, 200], 
                    msg: "La descripcón del Bootcamp debe tener entre 2 y 200 caracteres" }
            }
        },
    },{
        sequelize: dbConfig,
        modelName: 'Bootcamp',
        tableName: 'bootcamps',
        timestamps: true
    }
);
}