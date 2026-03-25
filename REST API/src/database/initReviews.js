import { Review } from "../models/Review.js";

const initialReviews = [
    {
        // id: 1,
        // parentId: 1, 
        userId: 1,
        // songId: 1,
        reviewText: "A masterpiece of modern production. The synthesizers create an incredible atmosphere from start to finish.",
        rating: 5,
        date: "2026-03-24"
    },
    {
        // id: 2,
        // parentId: 2,
        userId: 2,
        // songId: 1,
        reviewText: "The lyrics have a very deep meaning, although the rhythm gets a bit monotonous in the second half.",
        rating: 3,
        date: "2026-03-23"
    },
    {
        // id: 3,
        // parentId: 3,
        userId: 3,
        // songId: 2,
        reviewText: "The artist's vocal performance on this track is spectacular. Definitely one of the best songs on the album.",
        rating: 4,
        date: "2026-03-22"
    },
    {
        // id: 4,
        // parentId: null,
        userId: 4,
        // songId: 2,
        reviewText: "Extremely catchy rhythm and excellent for dancing. The percussion really stands out.",
        rating: 5,
        date: "2026-03-21"
    },
    {
        // id: 5,
        // parentId: null,
        userId: 1,
        // songId: 3,
        reviewText: "The sound mix is a bit confusing in the chorus, the instruments overshadow the main voice.",
        rating: 2,
        date: "2026-03-20"
    },
    {
        // id: 6,
        // parentId: null,
        userId: 2,
        // songId: 3,
        reviewText: "An instant classic. The chord progression is simple but highly effective.",
        rating: 5,
        date: "2026-03-19"
    },
    {
        // id: 7,
        // parentId: null,
        userId: 2,
        // songId: 4,
        reviewText: "A disappointing track. It feels like they recycled rhythms from their previous work.",
        rating: 2,
        date: "2026-03-18"
    },
    {
        // id: 8,
        // parentId: null,
        userId: 3,
        // songId: 4,
        reviewText: "Excellent collaboration. Both artists' styles complement each other perfectly in this song.",
        rating: 4,
        date: "2026-03-17"
    },
    {
        // id: 9,
        // parentId: null,
        userId: 2,
        // songId: 5,
        reviewText: "Too commercial for the band's original style. It has lost the indie essence that characterized them.",
        rating: 3,
        date: "2026-03-16"
    },
    {
        // id: 10,
        // parentId: null,
        userId: 3,
        // songId: 5,
        reviewText: "The acoustic guitar intro gives it a beautiful nostalgic touch. Highly recommended.",
        rating: 4,
        date: "2026-03-15"
    },
    {
        // id: 11,
        // parentId: null,
        userId: 3,
        // songId: 6,
        reviewText: "The bass line on this track is incredible, providing an energy that keeps you hooked from the first second.",
        rating: 5,
        date: "2026-03-14"
    },
    {
        // id: 12,
        // parentId: null,
        userId: 2,
        // songId: 6,
        reviewText: "An ideal song to listen to during a road trip. It transmits a lot of peace.",
        rating: 4,
        date: "2026-03-13"
    },
    {
        // id: 13,
        // parentId: null,
        userId: 2,
        // songId: 7,
        reviewText: "It brings nothing new to the genre. It is a generic track that is easily forgotten after a few minutes.",
        rating: 1,
        date: "2026-03-12"
    },
    {
        // id: 14,
        // parentId: null,
        userId: 2,
        // songId: 7,
        reviewText: "The transition between the slow verses and the explosive chorus is absolutely sublime.",
        rating: 5,
        date: "2026-03-11"
    },
    {
        // id: 15,
        // parentId: null,
        userId: 3,
        // songId: 8,
        reviewText: "It is a good idea poorly executed. It is too long and becomes repetitive towards the last minute.",
        rating: 3,
        date: "2026-03-10"
    },
    {
        // id: 16,
        // parentId: null,
        userId: 3,
        // songId: 8,
        reviewText: "The percussion has very well-achieved Latin influences that give a fresh air to the album.",
        rating: 4,
        date: "2026-03-09"
    },
    {
        // id: 17,
        // parentId: null,
        userId: 3,
        // songId: 9,
        reviewText: "A beautiful and heartbreaking ballad. The minimalist instrumentation helps highlight the rawness of the voice.",
        rating: 5,
        date: "2026-03-08"
    },
    {
        // id: 18,
        // parentId: null,
        userId: 4,
        // songId: 9,
        reviewText: "The piano solo that happens in the middle of the track shows the immense talent of the session musicians.",
        rating: 5,
        date: "2026-03-07"
    },
    {
        // id: 19,
        // parentId: null,
        userId: 4,
        // songId: 10,
        reviewText: "The overall production lacks a bit of punch. It feels like an unfinished demo.",
        rating: 2,
        date: "2026-03-06"
    },
    {
        // id: 20,
        // parentId: null,
        userId: 4,
        // songId: 10,
        reviewText: "The energy and positive vibe that this song transmits is unmatched. Excellent mastering work.",
        rating: 5,
        date: "2026-03-05"
    }
];

export async function loadInitialReviews() {

    try {

        const count = await Review.count();

        if(count == 0){
            await Review.bulkCreate(initialReviews);
            console.log("Initial reviews loaded successfully.");
        }

    } catch (error) {
        console.log(error)
    }
}