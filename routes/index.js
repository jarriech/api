var { Router } = require("express");
var routerCharacters = require("./characters");
var routerMovies = require("./movies");
var routerGenres = require("./genres");


var router = Router();

//Configuarar los routers

router.use("/characters", routerCharacters);
router.use("/movies", routerMovies);
router.use("/genres", routerGenres)


module.exports = router;