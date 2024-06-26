import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, unique: true },
        slug: String,
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model('Category', categorySchema);
