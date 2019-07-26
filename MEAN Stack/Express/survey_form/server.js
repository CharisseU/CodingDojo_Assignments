// 1. have root route render form view (GET)
// 2. have form post data to separate route (POST)
// 3. redirect user to show page
// 4. render show page with user's input data, obtained from session (GET)
// 5. allow user to return to root

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({
	secret: 'key',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000}
}));

app.get('/', function(req,res) {
	res.render('index');
})
app.post('/process', function(req,res){
	console.log(req.body);
	req.session.name = req.body.name;
	req.session.loc = req.body.loc;
	req.session.lang = req.body.lang;
	req.session.comment = req.body.comment;
	res.redirect('/result');
})
app.get('/result', function(req,res){
	res.render('result', {user: req.session});
})

app.listen(8000, function() {
	console.log('listening on port 8000')
})