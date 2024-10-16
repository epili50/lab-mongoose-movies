const express = require("express");
const Celebrity = require("../models/celebrity.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();

    res.render('index.ejs', {
      celebrities
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
