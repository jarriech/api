const { Character, Genre, Movie, Op } = require("../db");

const getMovieByTitle = async (title) => {
    try {
        const movie = await Movie.findOne({
            where: {
                title: {
                    [Op.iLike]: `%${title}%`,
                },
            },
            include: [Character, Genre]
        });
        return movie
    } catch (error) {
        return error
    };
};

module.exports = getMovieByTitle;