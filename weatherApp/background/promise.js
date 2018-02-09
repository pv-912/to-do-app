var somePromise = new Promise((resolve, reject)=>{
	resolve('hello its ok');
	reject('lag gyi meri ');
});

somePromise.then((message) => {
	console.log('Success :', message);
	},(errorMessage) => {
	console.log('Error :', errorMessage);	
});

/* add promise example  */
var addSync = (a, b)=>{
	return addPromise = new Promise((resolve, reject) => {
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a+b)
		} else{
			reject('they are not numbers.');
		}
	});
};

addSync(5, 6).then((res) => {
	console.log('Success : ', res);
	return addSync( res,11);
	}).then((res) => {
		console.log('Success : ', res);
	}).catch((errorMessage) => {
		console.log('Error : ', errorMessage);
});