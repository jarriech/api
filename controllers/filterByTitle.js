const getMovieByTitle = require("../servicio/filterByTitle");

const getMovieByTitleC = async (req, res, next) => {
    const { genre, order, title } = req.query;
    try {
        if (genre || order) return next();
        const movie = await getMovieByTitle(title);
        movie === null
        ? res.status(404).json({ msg: "Not found" })
        : res.status(200).json(movie);
    } catch (error) {
        next(error)
    };
};

module.exports = getMovieByTitleC;