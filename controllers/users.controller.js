import User from '../models/User.js';
import Role from '../models/Role.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('rol', 'nombre');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

export const createUser = async (req, res) => {
    const { nombres, apellidos, identificacion, email, rolId } = req.body;

    if (!nombres || !apellidos || !identificacion || !email || !rolId) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const existeRol = await Role.findById(rolId);
        if (!existeRol) {
            return res.status(400).json({ message: 'El rol no existe' });
        }

        const nuevoUsuario = new User({
            nombres,
            apellidos,
            identificacion,
            email,
            rol: rolId
        });

        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario', error: error.message });
    }
};
