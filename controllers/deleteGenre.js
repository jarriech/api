const deleteGenre = require("../servicio/deleteGenre");

const deleteGenreC = async (req, res, next) => {
    try {
        const deletedGenre = await deleteGenre(req);
        deletedGenre === 0
        ? res.status(404).json({ msg: "Not found" })
        : res.status(200).json({ msg: "Deleted" });
    } catch (error) {
        next(error)
    };
};

module.exports = deleteGenreC;