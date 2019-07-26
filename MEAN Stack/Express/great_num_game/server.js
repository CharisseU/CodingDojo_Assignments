var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.use(session({
    secret: 'key',
    resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000}
}));

var random = Math.floor(Math.random() * 101);

app.get("/", function(req, res){
	
	if(!req.session.guess){
		var context = {
			status: "hidden",
			msg: "",
			showForm: "hidden"
		}
	}
	else{
		if(req.session.guess > random){
			var context = {
				status: "block red",
				msg: "Too High!",
				showForm: "hidden"	
			}
		}

		else if(req.session.guess < random){
			var context = {
				status: "block red",
				msg: "Too low!",
				showForm: "hidden"
			}
		}
		else{
			var context = {
				status: "block green",
				msg: "You guessed the number!",
				showForm: "show"
			}
		}
	}

	res.render("index", {context: context});
})

app.post("/guess", function(req, res){
	req.session.guess = req.body.aGuess;
	res.redirect("/");
})

app.post("/reset", function(req, res){
	random = Math.floor(Math.random() * 101);
	req.session.guess = undefined;
	res.redirect("/");
})

PORT = 8000;
app.listen(8000, function(){
console.log("Listening on port " + PORT);
})