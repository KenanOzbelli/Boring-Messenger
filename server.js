var express = require("express");
var exphbs = require("express-handlebars");
var handlebars = require("handlebars");

var PORT = process.env.PORT || 8080;
var db = require("./models");
var {
    allowInsecurePrototypeAccess
  } = require("@handlebars/allow-prototype-access");

var app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main",
      handlebars: allowInsecurePrototypeAccess(handlebars)
    })
  );
  app.set("view engine", "handlebars");

  require("./controllers/html-routes.js")(app);
  require("./controllers/api-routes.js")(app);

  db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });


