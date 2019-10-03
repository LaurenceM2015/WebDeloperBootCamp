// JavaScrip Higher Order Functions and Arrays

const companies = [
		{name: "company One",    	category: "Finance", 		start: 1981, end: 2003},
		{name: "company Two",    	category: "Retail", 		start: 1991, end: 2008},
		{name: "company Three",  	category: "Auto", 			start: 1999, end: 2007},
		{name: "company Four",   	category: "Retail", 		start: 1989, end: 2010},
		{name: "company Five",   	category: "Technoligy", 	start: 2009, end: 2014},
		{name: "company Six",    	category: "Finance", 		start: 1981, end: 2003},
		{name: "company Seven",     category: "Auto", 			start: 1986, end: 1996},
		{name: "company Eight",   	category: "Technoligy", 	start: 2011, end: 2016},
		{name: "company Nine",   	category: "Retail", 	    start: 1981, end: 1989},
];

const ages = [ 33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Combine all the methods (map, filter, sort and reduce)

const combine = ages
	.map(age => age * 2)
	.filter(age => age >= 40)
	.sort((a, b) => a - b)
	.reduce((a, b) => a + b, 0);
console.log(combine);


// Printing companies using the simple for loop

/*

for(let i = 0; i < companies.length; i++){
	console.log(companies[i]);
}


// forEach (syncronysing), with a callback function (can take arguement like: company, index and companies)
ages.forEach(function (age) {
	if (age % 5 === 0) {
		console.log(age);
	}
});  */


// Using the Age arrays
/*
let canDrink = [];
for(let i = 0; i < ages.length; i++){
	if(ages[i] >= 21 ){
		canDrink.push(ages[i]);
	}

}
*/

/*
// ES5 using callback function
//let canDrink = [];
const canDrink = ages.filter(function(age){
	if(age >= 21) {
		return true;
	}
})

*/

// filter with Ages arrays

// ES6 Arrow function 
	/*
		const canDrink = ages.filter(age => age >= 21 );
		console.log("Yes you can drink " + canDrink);
	*/


// Filter with companies arrays
/*
	const retailCompanies = companies.filter(function(company){
	if (company.category === 'Retail'){
		return true;
	}
});
*/

// ES6 Arrow Function to print the company category
/*
	const retailCompanies = companies.filter(company => company.category === 'Retail');
	console.log(retailCompanies);
*/


// Get Companies that started in the 80s
/*
	const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
	console.log(eightiesCompanies); 
*/

// Get companies that lasted 10 years or more
	/*
		const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
		console.log(lastedTenYears);
	*/

// map hight function

	// USING THE COMPANY ARRAY
	/*
		const companyName = companies.map(function(company) {
		return company.name;
		})
		console.log(companyName);
	*/

	// Formating the Output with the function word
	/*
		const testMap = companies.map(function(company){
		return `${company.name} [${company.start} - ${company.end}]`;
		});
	*/

	// Using the arrow function 
	/*
		const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
		console.log(testMap);
	*/

	// USING AGE ARRAY WITH MAP HIGHT ORDER FUNCTION

	/*
		const agesSquare = ages
		.map(age => Math.sqrt(age))
		.map(age => age * 2);
		console.log(agesSquare);
	*/

// sort

// Sorting companies array using sort hight order function
	/*
		const sortedCompanies = companies.sort(function(c1, c2){
		if(c1.start > c2.start){
				return 1;
		}else {
			return -1;
	}
 	});
	*/

 // short version using arrow function (? return 1 or else : to return -1)
 
 /*
	const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
 	console.log(sortedCompanies);
 */

 // Sort hight order function using ages array.
	 /*
	 	const sortAges = ages.sort((a,b) => a - b);
	 	console.log(sortAges);
	 */

// reduce

// Ages array using reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// COMPANY ARRAY USING REDUCE HIGHT ORDER FUNCTION 

/*
	const totalYears = companies.reduce(function(total, company) {
		return total + (company.end - company.start)
	}, 0);
*/

// Using arrow function 
/*
	const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
	console.log(totalYears);
*/