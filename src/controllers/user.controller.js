import { User } from "../models/User.model.js";


export const createUser = async (req, res) => {
    try {
        const data = req.body;

        const usuario = await User.create(data);

        res.status(201).json({
            message: "Usuario creado con éxito",
            status: 201,
            data: usuario
        })
    } catch (error) {
        console.error(error);
    }
}

export const findUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await User.findByPk(id);

        res.status(200).json({
            message: `Usuario con ID_ ${id} Encontrado con éxito`,
            status: 200,
            data: usuario
        });
    } catch (error) {
        console.error(error);
    }
}

export const findAll = async (req, res) => {
    try {
        const usuarios = await User.findAll();

        res.status(200).json({
            message: "Usuarios encontrados",
            status: 200,
            data: usuarios
        })
    } catch (error) {
        console.error(error);
    }
}

export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        await User.update(data, {
            where: { id }
        });

        res.status(200).json({
            message: `Usuario con ID_ ${id} actualizado con éxito`,
            status: 200,
            data: data
        });
    } catch (error) {
        console.error(error);
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params

        const usuario = await User.findByPk(id);

        await usuario.destroy();

        res.status(200).json({
            message: 'Usuario Eliminado con éxito',
            status: 200,
            
        })
    } catch (error) {
        console.error(error);
    }
}

