var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
  console.log('client request URL:', request.url); 
	if(request.url === '/'){
		fs.readFile('views/index.html', 'utf-8', function(errors, contents){
			response.writeHead(200, {'Content type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/cars') {
		fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end;
		});
	}
	else if (request.url === '/cats'){
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents); // this line is causing an error in the server
			console.log("reading file");
			response.end();
		});
	}
	else if (request.url === '/cars/new') {
		fs.readFile('./views/newCar.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/cats/new') {
		fs.readFile('./views/newCat.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
    });
  }
	else if (request.url === '/images/cars/car1.png') {
		fs.readFile('./images/cars/car1.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car4.png') {
		fs.readFile('./images/cars/car4.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car5.png') {
		fs.readFile('./images/cars/car5.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car6.png') {
		fs.readFile('./images/cars/car6.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car7.png') {
		fs.readFile('./images/cars/car7.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car8.png') {
		fs.readFile('./images/cars/car8.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car9.png') {
		fs.readFile('./images/cars/car9.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car10.png') {
		fs.readFile('./images/cars/car10.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car11.png') {
		fs.readFile('./images/cars/car11.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car12.png') {
		fs.readFile('./images/cars/car12.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car13.png') {
		fs.readFile('./images/cars/car13.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car14.png') {
		fs.readFile('./images/cars/car14.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cars/car15.png') {
		fs.readFile('./images/cars/car15.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  
	else if (request.url === '/images/cars/car2.png') {
		fs.readFile('./images/cars/car2.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cars/car3.png') {
		fs.readFile('./images/cars/car3.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cats/cat1.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat1.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cats/cat2.png') {
		fs.readFile('./images/cats/cat2.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cats/cat3.png') {
		fs.readFile('./images/cats/cat3.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cats/cat4.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat4.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
	}else if (request.url === '/images/cats/cat5.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat5.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cats/cat6.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat6.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cats/cat7.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat7.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cats/cat8.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat8.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cats/cat9.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat9.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cats/cat10.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat10.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cats/cat11.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat11.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  else if (request.url === '/images/cats/cat12.png') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/cat12.png', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
  }
  
	else {
		response.writeHead(404);
		response.end('Not found');
	}
})
const port = 7077;
server.listen(port);
console.log('Running server on port', port);