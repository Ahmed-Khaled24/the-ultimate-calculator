function add(a: number, b: number): number {
	return a+b;
}

function subtract(a: number, b: number): number {
	return a-b;
}

function multiply(a: number, b: number): number {
	return a*b;
}

function divide(a: number, b: number): number {
	if(b===0){
		console.log("error")
		return 0;
	}
	else{
		return a/b;

	}
}
