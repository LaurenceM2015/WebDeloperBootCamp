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

const ages = [ 33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

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
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
	console.log(lastedTenYears);




	

// map
// sort
// reduce