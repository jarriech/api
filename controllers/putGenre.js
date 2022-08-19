const putGenre = require("../servicio/putGenre");

const putGenreC = async (req, res, next) => {
    try {
        const updatedGenre = await putGenre(req)
        updatedGenre === null
        ? res.status(404).json({ msg: "Not found" })
        : res.status(200).json({ msg: "Updated" });
    } catch (error) {
        next(error)
    };
};

module.exports = putGenreC;