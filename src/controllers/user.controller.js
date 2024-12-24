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