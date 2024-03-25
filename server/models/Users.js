import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: String,
        surname: String,
        username: { type: String, unique: true },
        email: { type: String, unique: true },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema);
