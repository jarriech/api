const getAllCharacters = require("../servicio/getAllCharacter");

const getAll = async (req, res, next) => {
    try {
        if (req.query.name || req.query.age || req.query.movies) return next()
        const allCharacters = await getAllCharacters();
        allCharacters.length < 1
        ? res.status(404).json({ msg: "not found" })
        : res.status(200).json(allCharacters);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAll;