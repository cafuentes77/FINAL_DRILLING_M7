import { Model, DataTypes } from "sequelize";


export class User extends Model {}


export const initUser = (dbConfig) => {
    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty: {msg: 'El campo nombre no puede estar vacío'},
                len: {
                    args: [2, 50], 
                    msg: 'El nombre debe tener entre 2 y 100 caracteres'
                },
                is: {
                    args: /^[a-zA-ZÁ-ÿñÑ\s]+$/,
                    msg: 'El nombre solo puede contener letras del abecedario español'
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {msg: 'El campo apellido no puede estar vacío'},
                len: {
                    args: [2, 50], 
                    msg: 'El apellido debe tener entre 2 y 50 caracteres'
                },
                is: {
                    args: /^[a-zA-ZÁ-ÿñÑ\s]+$/,
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { msg: "El correo electrónico ingresado ya está en uso" },
            validate: {
                notEmpty: { msg: 'El campo correo electrónico no puede estar vacío' },
                isEmail: { msg: "El correo electrónico ingresado no es válido" },
            }
        }
    },{
        sequelize: dbConfig,
        modelName: 'User',
        tableName: 'users',
        timestamps: true
    })
}