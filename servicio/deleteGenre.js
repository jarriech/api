const { Genre } = require("../db");

const deleteGenre = async (req) => {
    const { id } = req.params;
    try {
        const deletedGenre =  await Genre.destroy({
            where: { id }
        });
        return deletedGenre;
    } catch (error) {
        return error
    };
};

module.exports = deleteGenre;