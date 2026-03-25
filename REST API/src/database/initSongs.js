import { Song } from "../models/Song.js";

const initialSongs = [
    {
        name: "Neon Nights",
        artist: "The Midnight Echo",
        genre: "Synthwave",
        duration: "3:45",
        songImage: "https://example.com/song1.jpg"
    },
    {
        name: "Acoustic Whispers",
        artist: "Elena Rivers",
        genre: "Folk",
        duration: "4:12",
        songImage: "https://example.com/song2.jpg"
    },
    {
        name: "Electric Soul",
        artist: "Groove Masters",
        genre: "Funk",
        duration: "3:50",
        songImage: null
    },
    {
        name: "City Lights",
        artist: "Urban Dreamers",
        genre: "Pop",
        duration: "3:15",
        songImage: "https://example.com/song4.jpg"
    },
    {
        name: "Heavy Hearts",
        artist: "Iron Core",
        genre: "Rock",
        duration: "4:30",
        songImage: "https://example.com/song5.jpg"
    },
    {
        name: "Ocean Breeze",
        artist: "Chillwave Surfers",
        genre: "Lo-Fi",
        duration: "2:55",
        songImage: "https://example.com/song6.jpg"
    },
    {
        name: "Galactic Voyage",
        artist: "Starset",
        genre: "Electronic",
        duration: "5:10",
        songImage: "https://example.com/song7.jpg"
    },
    {
        name: "Midnight Jazz",
        artist: "The Blue Notes",
        genre: "Jazz",
        duration: "4:45",
        songImage: "https://example.com/song8.jpg"
    },
    {
        name: "Lost in Time",
        artist: "Echoes of Yesterday",
        genre: "Alternative",
        duration: "3:40",
        songImage: "https://example.com/song9.jpg"
    },
    {
        name: "Summer Anthem",
        artist: "Sunny Days",
        genre: "Pop",
        duration: "3:20",
        songImage: "https://example.com/song10.jpg"
    }
];

export async function loadInitialSongs() {

    try {

        const count = await Song.count();

        if (count == 0) {
            await Song.bulkCreate(initialSongs);
            console.log("Initial songs loaded successfully.");
        } else {
            console.log("Initial songs already loaded.");
        }
    } catch (error) {
        console.log(error)
    }
}