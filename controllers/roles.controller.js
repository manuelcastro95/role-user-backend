import Role from '../models/Role.js';

export const getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener roles' });
    }
};

export const createRole = async (req, res) => {
    const { nombre, descripcion } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'El nombre del rol es obligatorio' });
    }

    try {
        const nuevoRol = new Role({ nombre, descripcion });
        await nuevoRol.save();
        res.status(201).json(nuevoRol);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el rol' });
    }
};
