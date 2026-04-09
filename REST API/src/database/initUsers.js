import { User } from "../models/User.js";

const initialUsers = [
    {
        username: "musiclover99",
        email: "lover99@correo.com",
        password: "password123",
        name: "Carlos Mendoza",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWti9igEtHDdFN_OVq90LY1NZKKqMGTnMDQw&s",
        followersCount: 154,
        followingCount: 89
    },
    {
        username: "synthwave_rider",
        email: "rider@correo.com",
        password: "password123",
        name: "Laura Gómez",
        profileImage: "https://www.kyoceradocumentsolutions.es/content/dam/kyocera/es/images/square/Square-540x540-reclutamiento_personas_e-Recruitment.jpg.png",
        followersCount: 42,
        followingCount: 15
    },
    {
        username: "classic_critic",
        email: "critic@correo.com",
        password: "password123",
        name: "Roberto Silva",
        profileImage: "https://www.kyoceradocumentsolutions.es/content/dam/kyocera/es/images/square/Square-540x540-tienes_tus_datos_a_salvo_en_office_365.png",
        followersCount: 1024,
        followingCount: 50
    },
    {
        username: "pop_fanatic",
        email: "popfan@correo.com",
        password: "password123",
        name: "Ana Martínez",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpT1Dn0NCMLiH0Xi6xaxuYHqVHHn4LqJVGQ&s",
        followersCount: 12,
        followingCount: 110
    }
];

export async function loadInitialUsers() {
    try {
        const count = await User.count();
        if (count === 0) {
            await User.bulkCreate(initialUsers);
            console.log("Initial users loaded successfully.");
        } else {
            console.log("Initial users already loaded.");
        }
    } catch (error) {
        console.log(error);
    }
}