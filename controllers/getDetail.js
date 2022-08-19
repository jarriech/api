const getDetailCharacter = require("../servicio/getDetailCharacter");

const getDetail = async (req, res, next) => {
    const { id } = req.params;
    try {
        const characterDetail = await getDetailCharacter(id)
        characterDetail === null
        ? res.status(404).json({ msg: "not found" })
        : res.status(200).json(characterDetail);
    } catch (error) {
       next(error) 
    };
};

module.exports = getDetail;