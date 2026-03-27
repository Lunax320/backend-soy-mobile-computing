import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitialReviews } from "./database/initReviews.js";
import { loadInitialUsers } from "./database/initUsers.js";
import { loadInitialSongs } from "./database/initSongs.js";
import { setupRelations } from "./models/relations.js";
import "./models/Review.js";
import "./models/User.js";
import "./models/Follower.js";
import "./models/Song.js";

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


            setupRelations();

        await sequelize .sync({ force: true });

        

        await loadInitialUsers();
        await loadInitialSongs();
        await loadInitialReviews();

        app.listen(3000, () => {
            console.log("Server on port 3000")
        });
    } catch (error){
        console.log(error);
    }
}

initi();