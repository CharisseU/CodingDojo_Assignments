const controller = require ( './controller' );

module.exports = app => {	
	app.get ( '/' , controller.index ) 
	app.post ( '/send_message' , controller.send_message );
	app.post ( '/send_comment' , controller.send_comment );
}