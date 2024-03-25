import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Connecting with mongodb successfully!');
    } catch (error) {
        console.error('Error in connection: ', error);
        throw error;
    }
};

export default dbConnect;
