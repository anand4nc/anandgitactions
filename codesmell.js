const codeSmell = () => {
	let a = 5;
	return a;
	// doing somthing extra here
	a = 4;
}

console.log(codeSmell());
