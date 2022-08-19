const postCharacter = require("../servicio/postCharacter");

const post = async (req, res, next) => {
    try {
        const createdCharacter = await postCharacter(req)
        createdCharacter === null
        ? res.status(400).json({ msg: "At least, are required" })
        : res.status(201).json({ msg: "created" })
    } catch (error) {
        next(error)
    };
};

module.exports = post;