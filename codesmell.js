const codeSmell = () => {
	let a = 5;
	return a;
	a=456
	// doing somthing extra here
}

console.log(codeSmell());
