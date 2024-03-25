import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connecting with mongodb successfully!');
    } catch (error) {
        console.error('Error in connection: ', error);
        throw error;
    }
};
