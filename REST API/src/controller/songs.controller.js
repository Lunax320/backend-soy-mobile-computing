import { Song } from "../models/Song.js";  


export const getSongs = async (req, res) => {
    const { id } = req.params;

    const song = await Song.findByPk(id);

    if (!song) {
        return res.status(404).json({ message: "Song not found" });
    }

    return res.json(song);
};

export const getAllSongs = async (req, res) => {
    const songs = await Song.findAll();
    return res.json(songs);
};  

//cargar objeto de usuario al request body para crear un nuevo usuario
export const createSong = async (req, res) => {
    const newSong = await Song.create(req.body);
    return res.json(newSong);
};              

export const updateSong = async (req, res) => {
    const id  = req.params.id;
    const song = await Song.findByPk(id);           
    try {
        await song.update(req.body);
    } catch (error) {
        console.log
    }       
    return res.json(song);
};          

export const deleteSong = async (req, res) => {
    const id  = req.params.id;
    const song = await Song.findByPk(id);
    await song.destroy();
    return res.sendStatus(204); // delete ok
};  

