import { Review } from "../models/Review.js";
import { User } from "../models/User.js";
import { Song } from "../models/Song.js";

export const getReviews = async (req, res) => {
    try {
        // Consultar reseñas incluyendo usuario y cancion
        const reviews = await Review.findAll({
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "username", "name", "profileImage"]
                },
                {
                    model: Song,
                    as: "song",
                    attributes: ["name", "artist"]
                }
            ]
        });

        // 2. Dar formato a los datos para que coincidan con ReviewDto.kt
        const formattedReviews = reviews.map(r => {
            return {
                id: r.id.toString(),
                userId: r.userId.toString(),
                songName: r.song.name,
                artistName: r.song.artist,
                reviewText: r.reviewText,
                rating: r.rating,
                createdAt: r.date, 
                updatedAt: r.updatedAt,
                user: {
                    id: r.user.id.toString(),
                    username: r.user.username,
                    name: r.user.name,
                    profileImage: r.user.profileImage
                }
            };
        });

        return res.json(formattedReviews);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getReviewBySongId = async (req, res) => {
    try {
        const id = req.params.id;   
        const reviews = await Review.findAll({ 
            where: { songId: id },
            include: [
                { model: User, as: "user", attributes: ["id", "username", "name", "profileImage"] },
                { model: Song, as: "song", attributes: ["name", "artist"] }
            ]
        });

        const formattedReviews = reviews.map(r => {
            return {
                id: r.id.toString(),
                userId: r.userId.toString(),
                songName: r.song.name,
                artistName: r.song.artist,
                reviewText: r.reviewText,
                rating: r.rating,
                createdAt: r.date,
                updatedAt: r.updatedAt,
                user: {
                    id: r.user.id.toString(),
                    username: r.user.username,
                    name: r.user.name,
                    profileImage: r.user.profileImage
                }
            };
        });

        return res.json(formattedReviews);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getReviewByUserId = async (req, res) => {
    try {
        const id = req.params.id; 
        const reviews = await Review.findAll({ 
            where: { userId: id },
            include: [
                { model: User, as: "user", attributes: ["id", "username", "name", "profileImage"] },
                { model: Song, as: "song", attributes: ["name", "artist"] }
            ]
        });    

        const formattedReviews = reviews.map(r => {
            return {
                id: r.id.toString(),
                userId: r.userId.toString(),
                songName: r.song.name,
                artistName: r.song.artist,
                reviewText: r.reviewText,
                rating: r.rating,
                createdAt: r.date,
                updatedAt: r.updatedAt,
                user: {
                    id: r.user.id.toString(),
                    username: r.user.username,
                    name: r.user.name,
                    profileImage: r.user.profileImage
                }
            };
        });

        return res.json(formattedReviews);   
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }   
};

export const createReview = async (req, res) => {
    console.log(req.body);

    try {
        const newReview = await Review.create(req.body);
        const parentReviewId = req.body.parentReviewId;
        if (parentReviewId != null && parentReviewId != undefined) {
            console.log("ENTRA EN CREATE REVIEW");
            const parentReview = await Review.findByPk(parentReviewId);
            if (!parentReview) {
                return res.status(404).json({ error: "Parent review not found" });
            }
        }
        return res.json(newReview);
    } catch (error) {
        return res.status(500).json({ error: error.message });
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
};