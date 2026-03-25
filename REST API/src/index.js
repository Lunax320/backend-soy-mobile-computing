import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitialReviews } from "./database/initReviews.js";
import "./models/Review.js"

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

        await sequelize .sync({ force: true });

        await loadInitialReviews();

        app.listen(3000, () => {
            console.log("Server on port 3000")
        });
    } catch (error){
        console.log(error);
    }
}

initi();