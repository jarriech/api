const deleteMovie = require("../servicio/deleteMovie");

const deleteMovieC = async (req, res, next) => {
    try {
        const deletedMovie = await deleteMovie(req);
        // si = 0, return que no hubo coincidencias
        // si = 1, return que fue eliminado
        deletedMovie === 0
        ? res.status(404).json({ msg: "Not found" })
        : res.status(200).json({ msg: "Deleted" });
    } catch (error) {
        next(error)
    };
};

module.exports = deleteMovieC;