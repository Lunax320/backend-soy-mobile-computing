import app from "./app.js";
import { sequelize } from "./database/database.js";

async function initi(){
    try{
        await sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch(err => {
                console.error("Unable to connect to the database", err);
            });
        app.listen(3000, () => {
            console.log("Server on port 3000")
        });
    } catch (error){
        console.log(error);
    }
}

initi();