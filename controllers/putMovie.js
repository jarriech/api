const putMovie = require("../servicio/putMovie");

const putMovieC = async (req, res, next) => {
    try {
        // Llamamos al servicio para actualizar la pelicula y le pasamos por request lo que venga
        const updatedMovie = await putMovie(req)
        updatedMovie === null
        ? res.status(404).json({ msg: "Not found" })
        : res.status(200).json({ msg: "Updated "});
    } catch (error) {
        next(error)
    };
};

module.exports = putMovieC;