const printPerson = (name, age) => {
	console.log(`Hi ${name}, you are ${age}`)
}

printPerson('Zed', 44);
printPerson('Fran', 100);
printPerson('Alex', 30);
printPerson('Eve', 35);

console.log('---------pets---------');

const printPet = (owner_name, owner_age, pet_name, pet_age) => {
	printPerson(owner_name, owner_age);
	console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

printPet('Max', 32, 'Mr. Scruffles', 10);
printPet('Fran', 100, 'Sane', 2);
printPet('Alex', 30, 'Lizzy Lizard', 1);
printPet('Eve', 35, 'Kong the Donkey', 20);

console.log('------------callback style--------');

const fancyPet = (owner_name, owner_age, pet_name, pet_age, cb) => {
	cb(owner_name, owner_age);
	console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);

}
// What is going on here is that the variables
// are being renamed
//owner_name turns to name
//owner_age turns to age
//then called back as ${name} and ${age}
//in the code
fancyPet('Zed', 32, 'Mr. Scruffles', 10, (name, age) => {
	console.log(`Ooooh fancy ${name} you are ${age} years old.`)
});