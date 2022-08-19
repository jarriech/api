var putCharacter = require("../servicio/putCharacter")


const put = async (req, res, next) => {
    try {
        const updated = await putCharacter(req)
        updated === null
        ? res.status(400).json({ msg: "not found" })
        : res.status(200).json({ msg: "updated" });
    } catch (error) {
        next(error)
    };
};

module.exports = put
