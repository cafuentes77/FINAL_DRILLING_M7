import { Bootcamp } from "../models/Bootcamp.model.js";


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