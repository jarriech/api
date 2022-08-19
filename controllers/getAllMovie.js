const getAllMovies = require("../servicio/getAllMovie");

const getAllMoviesC = async (req, res, next) => {
    const { title, genre, order } = req.query;
    try {
        if (title || genre || order) return next()
        const allMovies = await getAllMovies();
        allMovies === null
        ? res.status(404).json({ msg: "Not found" })
        : res.status(200).json(allMovies);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAllMoviesC;