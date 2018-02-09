var getUser = (id, callback) => {
	var user = {
		id : id,
		name : 'Prashant'
	};
	setTimeout(() => {
		callback(user);
	},2000);
}
getUser(31, (userObject) => {
	console.log(userObject);
});