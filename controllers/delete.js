const deleteCharacter = require("../servicio/deleteCharacter");

const deletec = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deletedCharacter = await deleteCharacter(id);
        deletedCharacter === 0
        ? res.status(404).json({ msg: "Character not found" })
        : res.status(200).json({ msg: "Character deleted" });
    } catch (error) {
        next(error)
    };
};

module.exports = deletec