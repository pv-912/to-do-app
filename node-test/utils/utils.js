module.exports.add = (a, b) => a+b ;

module.exports.square = (a) => a*a;

module.exports.addAsync = (a, b, callback) => {
	setTimeout(() => {
		callback(a+b);
	}, 100);
}; 

module.exports.user = (user, fullname) => {
	var name = fullname.split(' ');
	user.firstName = name[0];
	user.lastName = name[1];
	return user;
}