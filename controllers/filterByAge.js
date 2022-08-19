const filterCharacterByAge = require("../servicio/filterCharacterByAge");

const getCharacterByAge = async (req, res, next) => {
    const { age } = req.query;
    try {
        if (age) {
            const character = await filterCharacterByAge(age);
            character.length < 1
            ? res.status(404).json({ msg: "Not found" })
            : res.status(200).json(character)
            return
        }
        next()
    } catch (error) {
        next(error)
    };
};

module.exports = getCharacterByAge;