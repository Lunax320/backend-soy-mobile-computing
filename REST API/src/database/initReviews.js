import { Review } from "../models/Review.js";

const initialReviews = [
    {
        // id: 1,
        // padre_id: 1, 
        // usuario_id: 1,
        // cancion_id: 1,
        reviewText: "Una obra maestra de la producción moderna. Los sintetizadores crean una atmósfera increíble de principio a fin.",
        rating: 5,
        date: "2026-03-24"
    },
    {
        // id: 2,
        // padre_id: 2,
        // usuario_id: 2,
        // cancion_id: 1,
        reviewText: "La letra tiene un significado muy profundo, aunque el ritmo se vuelve un poco monótono en la segunda mitad.",
        rating: 3,
        date: "2026-03-23"
    },
    {
        // id: 3,
        // padre_id: 3,
        // usuario_id: 3,
        // cancion_id: 2,
        reviewText: "El desempeño vocal del artista en esta pista es espectacular. Definitivamente una de las mejores canciones del álbum.",
        rating: 4,
        date: "2026-03-22"
    },
    {
        // id: 4,
        // padre_id: null,
        // usuario_id: 4,
        // cancion_id: 2,
        reviewText: "Ritmo sumamente pegajoso y excelente para bailar. La percusión destaca muchísimo.",
        rating: 5,
        date: "2026-03-21"
    },
    {
        // id: 5,
        // padre_id: null,
        // usuario_id: 1,
        // cancion_id: 3,
        reviewText: "La mezcla de sonido es un poco confusa en el coro, los instrumentos opacan la voz principal.",
        rating: 2,
        date: "2026-03-20"
    },
    {
        // id: 6,
        // padre_id: null,
        // usuario_id: 5,
        // cancion_id: 3,
        reviewText: "Un clásico instantáneo. La progresión de acordes es simple pero sumamente efectiva.",
        rating: 5,
        date: "2026-03-19"
    },
    {
        // id: 7,
        // padre_id: null,
        // usuario_id: 2,
        // cancion_id: 4,
        reviewText: "Una pista decepcionante. Se siente como si hubieran reciclado ritmos de sus trabajos anteriores.",
        rating: 2,
        date: "2026-03-18"
    },
    {
        // id: 8,
        // padre_id: null,
        // usuario_id: 3,
        // cancion_id: 4,
        reviewText: "Excelente colaboración. Los estilos de ambos artistas se complementan a la perfección en esta canción.",
        rating: 4,
        date: "2026-03-17"
    },
    {
        // id: 9,
        // padre_id: null,
        // usuario_id: 6,
        // cancion_id: 5,
        reviewText: "Demasiado comercial para el estilo original de la banda. Ha perdido la esencia indie que los caracterizaba.",
        rating: 3,
        date: "2026-03-16"
    },
    {
        // id: 10,
        // padre_id: null,
        // usuario_id: 7,
        // cancion_id: 5,
        reviewText: "La introducción con guitarra acústica le da un toque nostálgico precioso. Muy recomendada.",
        rating: 4,
        date: "2026-03-15"
    },
    {
        // id: 11,
        // padre_id: null,
        // usuario_id: 8,
        // cancion_id: 6,
        reviewText: "La línea de bajo de esta pista es increíble, aporta una energía que te mantiene enganchado desde el primer segundo.",
        rating: 5,
        date: "2026-03-14"
    },
    {
        // id: 12,
        // padre_id: null,
        // usuario_id: 4,
        // cancion_id: 6,
        reviewText: "Una canción ideal para escuchar durante un viaje en carretera. Transmite mucha paz.",
        rating: 4,
        date: "2026-03-13"
    },
    {
        // id: 13,
        // padre_id: null,
        // usuario_id: 9,
        // cancion_id: 7,
        reviewText: "No aporta nada nuevo al género. Es una pista genérica que se olvida fácilmente a los pocos minutos.",
        rating: 1,
        date: "2026-03-12"
    },
    {
        // id: 14,
        // padre_id: null,
        // usuario_id: 10,
        // cancion_id: 7,
        reviewText: "La transición entre los versos lentos y el estallido del coro es absolutamente sublime.",
        rating: 5,
        date: "2026-03-11"
    },
    {
        // id: 15,
        // padre_id: null,
        // usuario_id: 5,
        // cancion_id: 8,
        reviewText: "Es una buena idea mal ejecutada. Es demasiado larga y se vuelve repetitiva hacia el último minuto.",
        rating: 3,
        date: "2026-03-10"
    },
    {
        // id: 16,
        // padre_id: null,
        // usuario_id: 6,
        // cancion_id: 8,
        reviewText: "La percusión tiene influencias latinas muy bien logradas que le dan un aire fresco al álbum.",
        rating: 4,
        date: "2026-03-09"
    },
    {
        // id: 17,
        // padre_id: null,
        // usuario_id: 7,
        // cancion_id: 9,
        reviewText: "Una balada hermosa y desgarradora. La instrumentación minimalista ayuda a destacar la crudeza de la voz.",
        rating: 5,
        date: "2026-03-08"
    },
    {
        // id: 18,
        // padre_id: null,
        // usuario_id: 8,
        // cancion_id: 9,
        reviewText: "El solo de piano que ocurre a la mitad de la pista demuestra el inmenso talento de los músicos de sesión.",
        rating: 5,
        date: "2026-03-07"
    },
    {
        // id: 19,
        // padre_id: null,
        // usuario_id: 9,
        // cancion_id: 10,
        reviewText: "Falta un poco de fuerza en la producción general. Se siente como un demo inacabado.",
        rating: 2,
        date: "2026-03-06"
    },
    {
        // id: 20,
        // padre_id: null,
        // usuario_id: 10,
        // cancion_id: 10,
        reviewText: "La energía y la vibra positiva que transmite esta canción es inigualable. Excelente trabajo de masterización.",
        rating: 5,
        date: "2026-03-05"
    }
];

export async function loadInitialReviews() {
    const count = await Review.count();

    if(count == 0){
        await Review.bulkCreate(initialReviews);
        console.log("Initial reviews loaded")
    }
}