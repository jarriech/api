const postMovie = require("../servicio/postMovie");

const postMovieC = async (req, res, next) => {
    try {
        const newMovie = await postMovie(req)
        newMovie === null
        ? res.status(500).json({ msg: "You must provide, at least, title and released" })
        : res.status(201).json(newMovie);
    } catch (error) {
        next(error)
    };
};

module.exports = postMovieC;