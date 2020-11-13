const codeSmell = () => {
	let a = 5;
	return a;
	// doing somthing extra here
	a = 7;
	a = a +6;
}
console.log(codeSmell());
