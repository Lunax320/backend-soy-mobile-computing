
import express from "express";
import userRoutes from "./models/routes/user.routes.js";
import reviewRoutes from "./models/routes/review.routes.js";

const app = express();
app.use(express.json())
app.use(userRoutes);
app.use(reviewRoutes);
export default app