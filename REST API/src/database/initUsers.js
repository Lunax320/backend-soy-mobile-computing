import { User } from "../models/User.js";

const initialUsers = [
    {
        username: "musiclover99",
        email: "lover99@correo.com",
        password: "password123",
        name: "Carlos Mendoza",
        bio: "Explorando nuevos sonidos todos los días. Fan del rock indie y la música alternativa.",
        location: "Bogotá, Colombia",
        website: "https://carlosmendoza.com",
        profileImage: "https://ejemplo.com/perfil1.jpg",
        coverImage: "https://ejemplo.com/portada1.jpg",
        birthDate: "1998-05-14",
        verified: true,
        followersCount: 154,
        followingCount: 89
    },
    {
        username: "synthwave_rider",
        email: "rider@correo.com",
        password: "password123",
        name: "Laura Gómez",
        bio: "Productora musical en formación. Amante de los sintetizadores y la década de los ochenta.",
        location: "Medellín, Colombia",
        website: "https://lauraproduce.com",
        profileImage: "https://ejemplo.com/perfil2.jpg",
        coverImage: "https://ejemplo.com/portada2.jpg",
        birthDate: "2001-11-22",
        verified: false,
        followersCount: 42,
        followingCount: 15
    },
    {
        username: "classic_critic",
        email: "critic@correo.com",
        password: "password123",
        name: "Roberto Silva",
        bio: "Reseñando álbumes clásicos y analizando estructuras musicales. La teoría musical es mi pasión.",
        location: "Cali, Colombia",
        website: null,
        profileImage: "https://ejemplo.com/perfil3.jpg",
        coverImage: "https://ejemplo.com/portada3.jpg",
        birthDate: "1995-03-08",
        verified: true,
        followersCount: 1024,
        followingCount: 50
    },
    {
        username: "pop_fanatic",
        email: "popfan@correo.com",
        password: "password123",
        name: "Ana Martínez",
        bio: "Solo buenas vibras y música para bailar. Siempre buscando el próximo gran éxito del verano.",
        location: "Barranquilla, Colombia",
        website: null,
        profileImage: null,
        coverImage: null,
        birthDate: "2003-07-30",
        verified: false,
        followersCount: 12,
        followingCount: 110
    }
];

export async function loadInitialUsers() {

    try{
        const count = await User.count();

        if(count == 0){
            await User.bulkCreate(initialUsers);
            console.log("Initial users loaded");
        } else {
            console.log("Initial users already loaded");
        }
        
    } catch (error){
        console.log(error)
    }





}