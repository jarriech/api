const getDetailMovie = require("../servicio/detailMovie");

const getDetailMovieC = async (req, res, next) => {
    const { id } = req.params;
    try {
        const movieDetail = await getDetailMovie(id)
        movieDetail === null
        ? res.status(404).json({ msg: "Not found" })
        : res.status(200).json(movieDetail);
    } catch (error) {
       next(error) 
    };
};

module.exports = getDetailMovieC;