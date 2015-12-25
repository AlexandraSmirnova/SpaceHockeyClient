define([
	'models/userProfile'
], function (userModel) {	
	function initConnect() {		
		var ws = new WebSocket("ws://localhost:8080/gameplay");

		ws.onopen = function () {
			//$('.game-field__errors').hide();
			console.log("Open");
		};

		ws.onclose = function () {
			console.log('connection closed');
			//$('.game-field__errors').show();
		};

		return ws;
	}

	function sendMessage(ws, message) {
		ws.send(message);
	}

	return {
		initConnect: initConnect,
		sendMessage: sendMessage
	};
});