var express = require('express');

var app = express();

app.get('/cars', function(request, response){
	response.render('cars');
})
app.get('/cats', function(request, response){
	response.render('cats');
})
app.get('/cars/new', function(request, response) {
	response.render('form');
})

app.get('/cats/:catid(\\d+)', function(request, response) {
	console.log(request.params);
	var cat = {
		id: request.params.catid
	};
	if (cat.id == '1') {
		cat.color = "grey tabby";
		cat.name = "Tiger";
		cat.age = 2;
		cat.foods = "milk";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '2') {
		cat.color = "spotted";
		cat.name = "Doc";
		cat.age = 8;
		cat.foods = "anything";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '3') {
		cat.color = "grey";
		cat.name = "stormy";
		cat.age = "5";
		cat.foods = "tuna";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '4') {
		cat.color = "siamese";
		cat.name = "Siam";
		cat.age = "5";
		cat.foods = "tuna";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '5') {
		cat.color = "spotted savanna";
		cat.name = "Atamus";
		cat.age = "5";
		cat.foods = "chicken";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '6') {
		cat.color = "tabby kitten";
		cat.name = "fluffy";
		cat.age = ".5";
		cat.foods = "purina kitten";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '7') {
		cat.color = "fluffy tabby";
		cat.name = "Kit";
		cat.age = ".5";
		cat.foods = "purina kitten";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '8') {
		cat.color = "grey white mix";
		cat.name = "Pete RePete";
		cat.age = "5";
		cat.foods = "meatloaf";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '9') {
		cat.color = "full tabby";
		cat.name = "Jack";
		cat.age = "5";
		cat.foods = "liver";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '10') {
		cat.color = "tabby kitten";
		cat.name = "CryBaby";
		cat.age = ".5";
		cat.foods = "purina kitten";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '11') {
		cat.color = "persian tabby";
		cat.name = "Jack, Jill, Jon, Joe, Jemma";
		cat.age = ".2";
		cat.foods = "purina kitten";
		cat.sleep = ["under bed", "recliner"]
	}
	else if (cat.id == '12') {
		cat.color = "grey white mix";
		cat.name = "batman";
		cat.age = "5";
		cat.foods = "steak";
		cat.sleep = ["outside", "recliner"]

	}
	response.render('catinfo', {cat: cat});
})

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

app.listen(8000, function() {
	console.log("listening on port 8000");
})