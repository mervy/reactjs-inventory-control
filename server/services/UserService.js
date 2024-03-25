import User from '../models/Users.js';

const create = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

export default { create };
