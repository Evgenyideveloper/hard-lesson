let sum = 266219;

const proizvedenie = () =>{
	let arr = Array.from(sum.toString());
	let arrMap = arr.map((item) => {
		return parseInt(item);
	})
	
	let unit = 1;
	for (let i = 0; i < arrMap.length;i++) {	
		unit = unit * arrMap[i];
	} 	
	const result = unit ** 3;	
	console.log(result.toString().slice(0, 2));
	
}
proizvedenie();


