const { Router } = require('express');
var getAllGenres = require("../controllers/getAllGenre");
var postGenre = require("../controllers/postGenre");
var putGenre = require("../controllers/putGenre");
var deleteGenreC = require("../controllers/deleteGenre");

const router = Router();





router.get("/", getAllGenres);
router.post("/", postGenre);
router.put("/:id", putGenre);
router.delete("/:id", deleteGenreC);

module.exports = router;