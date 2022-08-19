const { Character, Movie } = require("../db");

const getAllMovies = async () => {
    try {
        // Buscamos a todas las movies
        let movies = (await Movie.findAll())
          .map(e => e.toJSON());
        movies = movies?.map(movie => ({
            title: movie?.title,
            image: movie?.image,
            released: movie?.released
        }));
        return movies;
    } catch (error) {
        return error;
    };
};

module.exports = getAllMovies;