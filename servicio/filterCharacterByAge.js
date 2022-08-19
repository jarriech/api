const { Character, Movie } = require("../db");

const filterCharacterByAge = async (age) => {
    try {
        const character = await Character.findAll({
            where: { age },
            include: [Movie]
        });
        return character
    } catch (error) {
        return error
    };
};

module.exports = filterCharacterByAge;