import { Router } from "express";   
import { getReviews } from "../controller/reviews.controller.js";
import { createReview } from "../controller/reviews.controller.js";
import { updateReview } from "../controller/reviews.controller.js";
import { deleteReview } from "../controller/reviews.controller.js";  
import { getReviewBySongId } from "../controller/reviews.controller.js";
import { getReviewByUserId } from "../controller/reviews.controller.js";    

const router = Router();

router.get("/reviews", getReviews);

router.post("/reviews", createReview);

router.put("/reviews/:id", updateReview);

router.delete("/reviews/:id", deleteReview);

router.get("/reviews/song/:id", getReviewBySongId);


router.get("/reviews/user/:id", getReviewByUserId);



export default router;