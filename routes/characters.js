var deletec = require("../controllers/delete");
var getAll = require("../controllers/getAll");
var post = require("../controllers/post");
var put = require("../controllers/put");
var getDetail = require("../controllers/getDetail");
const { Router } = require('express');

const router = Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/", post);
router.put("/:id", put);
router.delete("/:id", deletec);

module.exports = router;