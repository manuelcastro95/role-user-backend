import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombres:
    {
        type: String,
        required: true
    },
    apellidos:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;




