// Code that was created as an example pre modules, 
// here to show difference between the two app.js files.

var http = require('http');
var fs = require('fs');
server = http.createServer(function (request, response){
	response.writeHead(200, {'Content-type': 'text/html'});
	console.log('Request', request.url);
		if (request.url === '/') {
			fs.readFile('views/index.html', 'utf-8', function (errors, contents){
				response.write(contents);
				response.end();
			});
		} else if(request.url === '/dojo.html'){
			fs.readFile('views/dojo.html', 'utf-8', function (errors, contents){
				response.write(contents);
				response.end();
			});
		} else if (request.url === '/styles/style.css') {
			fs.readFile('./styles/style.css', function (errors, contents){
				response.write(contents);
				response.end();
			});
		} else if(request.url === '/images/cat5.png') {
			fs.readFile('./images/cats5.png', function (errors, contents){
				response.write(contents);
				response.end();
			});
		} else if(request.url === '/images/cat8.png') {
			fs.readFile('./images/cats8.png', function (errors, contents){
				response.write(contents);
				response.end();
			});
		} else {
			response.end('File not found!!!');
		}
});
server.listen(8000);
console.log("Running in localhost at port 8000");