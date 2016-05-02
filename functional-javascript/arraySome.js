/*
Return a function that takes a list of valid users, and returns a function that returns true if all the supplied users
exist in the original list of users
*/


function checkUsersValid( goodUsers ) {
	return function allUsersValid( submittedUsers ) {
		// Solution Goes Here
		return submittedUsers.every( function (testUser) {
			return goodUsers.some( function ( goodUsers ) {
				return goodUsers.id === testUser.id;
			});
		})
	};
}

module.exports = checkUsersValid;

/* Official Solution - Actually pretty close to mine

module.exports = function checkUsersValid ( goodUsers ) {
	return function allUsersValid ( submittedUsers ) {
		return submittedUsers.every( function (submitedUser) {
			return goodUsers.some( function (goodUser) {
			return goodUsers.id === submittedUser.id
			})
		})
	}
}
*/