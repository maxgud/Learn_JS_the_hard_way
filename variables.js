// To get this to work you need to use the ` 'backticks',
// Not the single quote ' , backtick is to the left of 1
// on most keyboards

//To get fancy , this is called interpolation

let name = 'Max Gudmundson';
let age = 32;
let height = 74;

let feet = Math.round(height / 12);
let inches = height - (feet * 12)
// you can use a variable as a parameter

console.log("Name:", name);
console.log("Age:", age);

// you can also embed variables in strings with ''

console.log(`Height ${feet} feet ${inches} inches.`);
console.log("Age * Height:", age * height);
// you can also put math in the ${boundaries}

//console.log('Age * Feet:', ${age * feet});

