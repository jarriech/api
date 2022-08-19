const getAllGenre = require("../servicio/getAllGenre");

const getAllGenres = async (req, res, next) => {
    try {
        const allGenres = await getAllGenre();
        allGenres.length < 1
        ? res.status(404).json({ msg: "Genres not found" })
        : res.status(200).json(allGenres);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAllGenres;