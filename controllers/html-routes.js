const path = require("path");

const db = require("../models");

module.exports = function(app){
    app.get("/", function(req,res){
        db.Message.findAll({})
        .then(message => res.render("index", { messages: message }))
        .catch(err => res.status(500).json(err));
    })
}