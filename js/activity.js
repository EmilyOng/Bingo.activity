define(["sugar-web/activity/activity"], function (activity) {

	// Manipulate the DOM only when it is ready.
	require(['domReady!'], function (doc) {

		// Initialize the activity.
		activity.setup();
		activity.getXOColor(function (error, colors) {
			getBoardColors(colors);
		});
	});
});

function getBoardColors(colors){
	var p;
	p = new boardColors(colors);
}