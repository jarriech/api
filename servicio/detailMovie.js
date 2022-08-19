const { Character, Genre, Movie } = require("../db");

const getDetailMovie = async (id) => {
    try {
        const movie = await Movie.findByPk(id, {
            include: [Character, Genre]
        });
        return movie;
    } catch (error) {
        return error
    };
};

module.exports = getDetailMovie;