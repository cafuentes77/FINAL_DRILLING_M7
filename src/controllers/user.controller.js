import { Bootcamp } from "../models/Bootcamp.model.js";
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
        const user = await User.findByPk(id, {
            attributes: ["id", "firstName", "lastName"], 
            include: {
                model: Bootcamp, 
                as: "bootcamps", 
                attributes: ["id", "title"], 
                through: {
                    attributes: [], 
                },
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "Usuario no encontrado",
                status: 404,
                data: null,
            });
        }

        res.status(200).json({
            message: "Usuario y bootcamps obtenidos con éxito",
            status: 200,
            data: user, 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al obtener el usuario y sus bootcamps",
            status: 500,
            data: null,
        });
    }
};

export const findAll = async (req, res) => {
    try {
        
        const users = await User.findAll({
            attributes: ["id", "firstName", "lastName", "email"], 
            include: {
                model: Bootcamp, 
                as: "bootcamps", 
                attributes: ["id", "title"], 
                through: {
                    attributes: [], 
                },
            },
        });

        if (users.length === 0) {
            return res.status(404).json({
                message: "No hay usuarios encontrados",
                status: 404,
                data: null,
            });
        }

        res.status(200).json({
            message: "Usuarios obtenidos con éxito",
            status: 200,
            data: users, 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al obtener los usuarios",
            status: 500,
            data: null,
        });
    }
};

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

