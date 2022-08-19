const { Character, Genre, Movie } = require("../db");

const postMovie = async (req) => {
    const { title, image, released, rating, characters, genres } = req.body;
    try {
        // title y released son obligatorios, si no son + return null
        if (title && released) {
          // buscamos o creamos asi para character, movie, genre
          const [createdChar] = await Character.findOrCreate({
            where: { name: characters }
          });
          const [createdGenre] = await Genre.findOrCreate({
            where: { name: genres }
          });
          const [newMovie] =  await Movie.findOrCreate({
              where: { title },
              defaults: {
                  released,
                  image,
                  rating,
              },
          })
          newMovie.addCharacter(createdChar);
          newMovie.addGenre(createdGenre);
          return newMovie;
        };
        return null;
    } catch (error) {
        return error
    };
};

module.exports = postMovie;