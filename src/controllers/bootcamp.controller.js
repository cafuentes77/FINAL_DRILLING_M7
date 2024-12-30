import { Bootcamp } from "../models/Bootcamp.model.js";
import { User } from "../models/User.model.js";


export const createBootcamp = async (req, res) => {
    try {
        const data = req.body;

        const bootcamps = await Bootcamp.create(data);

        res.status(201).json({
            message: "Bootcamp creado con éxito",
            status: 201,
            data: bootcamps
        })
    } catch (error) {
        console.error(error);
    }
}

export const addUser = async (req, res) => {
    try {
        const { bootcampId, userId } = req.body;  // Se reciben los IDs de bootcamp y usuario
        const bootcamps = await Bootcamp.findByPk(bootcampId, {
            attributes: ['id', 'title']
        });  // Buscar el bootcamp por su ID
        const users = await User.findByPk(userId, {
            attributes: ['id', 'firstName', 'lastName']
        });  // Buscar el usuario por su ID

        if (!bootcamps || !users) {
            return res.status(404).json({
                message: "Bootcamp o Usuario no encontrado",
                status: 404,
                data: null,
            });
        }

        // Asociar el usuario al bootcamp
        await bootcamps.addUser(users);  // Utilizando la asociación definida anteriormente

        res.status(200).json({
            message: 'Usuario agregado al Bootcamp con éxito',
            status: 200,
            data: { bootcamps, users },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al agregar el usuario al Bootcamp',
            status: 500,
            data: null,
        });
    }
};

export const findById = async (req, res) => {
    try {
        const { id } = req.params;
        const bootcamps = await Bootcamp.findByPk(id);

        res.status(200).json({
            message: `bootcamp con ID_ ${id} Encontrado con éxito`,
            status: 200,
            data: bootcamps
        });
    } catch (error) {
        console.error(error);
    }
}

export const findAll = async (req, res) => {
    try {
        // Obtener todos los usuarios con sus bootcamps asociados
        const users = await User.findAll({
            attributes: ["id", "firstName", "lastName", "email"], // Seleccionamos los campos de usuario que necesitamos
            include: {
                model: Bootcamp, // Incluir los bootcamps asociados
                as: "bootcamps", // El alias que hemos definido en las asociaciones
                attributes: ["id", "title"], // Seleccionamos los campos que queremos del bootcamp
                through: {
                    attributes: [], // Excluir los campos de la tabla intermedia (createdAt, updatedAt)
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
            data: users, // Esto contiene una lista de usuarios con sus bootcamps
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



