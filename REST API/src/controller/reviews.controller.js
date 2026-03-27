import { Review } from "../models/Review.js";

export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        return res.json(reviews);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        const parentReviewId = req.body.parentReviewId;
        if (parentReviewId!=null && parentReviewId!=undefined) {
            const parentReview = await Review.findByPk(parentReviewId);
            if (!parentReview) {
                return res.status(404).json({ error: "Parent review not found" });
            }
        }
        return res.json(newReview);
    } catch (error) {
        return res.status(500).json({ error: error.message })
        
    }
};

export const updateReview = async (req, res) => {
    try {
        const id = req.params.id;
        const review = await Review.findByPk(id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        await review.update(req.body);
        return res.json(review);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const id = req.params.id;
        const review = await Review.findByPk(id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        await review.destroy();
        return res.sendStatus(204); // delete ok
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}