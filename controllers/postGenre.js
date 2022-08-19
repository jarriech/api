const postGenre = require("../servicio/postGenre");

const postGenrec = async (req, res, next) => {
    try {
        const newGenre = await postGenreService(req)
        newGenre === null
        ? res.status(400).json({ msg: "Not create" })
        : res.status(201).json({ msg: "Created" });
    } catch (error) {
        next(error)
    };
};

module.exports = postGenrec;