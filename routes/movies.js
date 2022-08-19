const { Router } = require('express');
var getAllMovieC = require("../controllers/getAllMovie");
var postMovieC = require("../controllers/postMovie");
var putMovieC = require("../controllers/putMovie");
var deleteMovieC = require("../controllers/deleteMovie");
var getMovieByTitleC = require("../controllers/filterByTitle");
var getDetailMovieC = require("../controllers/detailMovie");


const router = Router();


router.get("/", getAllMovieC, getMovieByTitleC);
router.get("/:id", getDetailMovieC);
router.post("/", postMovieC);
router.put("/:id", putMovieC);
router.delete("/:id", deleteMovieC);

module.exports = router;