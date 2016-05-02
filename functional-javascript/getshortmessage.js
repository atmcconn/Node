
function getShortMessages(messages) {
	var message_arr = messages.map( function(element) {
		return element.message;
	});
	return message_arr.filter( function(element) {
		return element.length < 50;
	});
}

module.exports = getShortMessages;

/* Official Solution

module.exports = function getShortMessage(messages) {
	return messages.filter(function(item) {
		return item.message.length < 50
	}).map(function(item) {
		return item.message
	})
}
*/