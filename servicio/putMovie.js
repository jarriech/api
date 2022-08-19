const { Character, Genre, Movie } = require("../db");

const putMovie = async (req) => {
    const { characters, genres, image, rating, released, title } = req.body;
    const { id } = req.params;
    try {
        const findMovie = await Movie.findOne({ where: { id }}) // Se busca la pelicula por id
        if (findMovie) {
            // si la pelicula existe, se actualizan los siguientes datos
            await findMovie.update({
                image,
                released,
                title,
            });
            if (characters) {
                // si nos pasan characters, buscamos uno que ya exista o lo creamos
                const [createCharacter] = await Character.findOrCreate({
                    where: { name: characters }
                })
                // lo agregamos a la tabla de Movie
                await findMovie.addCharacter(createCharacter)
            };
            if (genres) {
                // si nos pasan genres, buscamos uno que ya exista o lo creamos
                const [createGenre] = await Genre.findOrCreate({
                    where: { name: genres }
                })
                // lo agregamos a la tabla de Movie
                await findMovie.addGenre(createGenre)
            }
        }
        // se retorna findMovie. Si no se encontro, retorna null, de lo contrario, 
        // retorna la pelicula actualizada
        return findMovie;
  } catch (error) {
      return error;
    
  }
};

module.exports = putMovie