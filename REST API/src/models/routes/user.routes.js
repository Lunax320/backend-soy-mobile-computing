import { Router } from "express";   
import { getUsers } from "../../controller/users.controller.js";
import { createUser } from "../../controller/users.controller.js";
import { updateUser } from "../../controller/users.controller.js";
import { deleteUser } from "../../controller/users.controller.js"; 
const router = Router();

//localhost:3000/users
router.get("/users", getUsers)

//localhost:3000/users
router.post("/users", createUser)

//localhost:3000/users/1
router.put("/users/:id", updateUser)

//localhost:3000/users/1
router.delete("/users/:id", deleteUser)

export default router;