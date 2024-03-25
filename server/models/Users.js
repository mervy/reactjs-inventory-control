import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        username: { type: String, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, minlength: 5, required: true },
        isActive: { type: Boolean, default: true, required: true },
    },
    { timestamps: true }
);

// Criar hash da senha antes de salvar
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const saltRounds = parseInt(process.env.SALT_BCRYPT, 10); //Conversão para base 10
        const salt = await bcrypt.genSalt(saltRounds);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (error) {
        return next(error);
    }
});

const User = model('User', userSchema); // Nome do modelo

export default User;
