import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
};

//cargar objeto de usuario al request body para crear un nuevo usuario
export const createUser = async (req, res) => {
    const newUser = await User.create(req.body);
    return res.json(newUser);
};


export const updateUser = async (req, res) => {
    const id  = req.params.id;
    const user = await User.findByPk(id);
    try {
        await user.update(req.body);
    } catch (error) {
        console.log
    }
    return res.json(user);
};


export const deleteUser = async (req, res) => {
    const id  = req.params.id;
    const user = await User.findByPk(id);
    await user.destroy();
    return res.sendStatus(204); // delete ok
};