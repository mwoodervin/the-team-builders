const express = require("express");
const router = express.Router();
const db = require("../models");

// create a team
router.post("/api/team", function (req, res) {
  db.Team.create({
    name: req.body.name
  })
    .then(function (dbTeam) {
      res.json(dbTeam);
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// find all teams
router.get("/api/team", function (req, res) {
  db.Team.findAll({})
    .then(function (dbTeam) {
      res.json(dbTeam);
    });
});

module.exports = router;
