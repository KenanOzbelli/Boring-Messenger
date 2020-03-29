const db = require("../models");

module.exports = function(app){
    app.get("/api/data", function(req, res){
        db.Info.findAll({}).then(function(dbInfo){
            res.json(dbInfo);
        });
    })
    
    app.post("/api/posts", function(req, res){
        console.log(req.body)
        db.Message.create({
            name:req.body.name,
            message:req.body.message
        }).then((dbMessage) =>{
            res.send(dbMessage)
        })
        .catch(err => res.send(500));
    });

    app.delete("/api/messages/:id", (req,res)=>{
        db.Message.destroy({where: {id: req.params.id}})
        .then(destroy => res.json(destroy))
        .catch(err => res.send(500));
    })
}