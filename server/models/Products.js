import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        },
        stock: Number,
        isActive: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Product', productSchema);
