const controller = require ( './controller' );
module.exports = ( app ) => {
	app.get ( '/api/tasks' , controller.index );
	app.get ( '/api/tasks/:id' , controller.read_one );
	app.post ( '/api/tasks' , controller.write_one );
	app.put ( '/api/tasks/:id' , controller.update );
	app.delete ( '/api/tasks/:id' , controller.destroy );
}