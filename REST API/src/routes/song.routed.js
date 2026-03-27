import { Router } from "express";       
import { getSongs } from "../controller/songs.controller.js";
import { createSong } from "../controller/songs.controller.js";
import { updateSong } from "../controller/songs.controller.js";
import { deleteSong } from "../controller/songs.controller.js";  
import { getAllSongs } from "../controller/songs.controller.js";


const router = Router();

router.get("/songs/:id", getSongs);

router.get("/songs", getAllSongs);  

router.post("/songs", createSong);      

router.put("/songs/:id", updateSong);

router.delete("/songs/:id", deleteSong);    

export default router;