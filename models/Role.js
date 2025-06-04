import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String
    }
}, { timestamps: true });

const Role = mongoose.model('Role', roleSchema);

export default Role;


