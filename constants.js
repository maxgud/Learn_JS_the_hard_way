const invicible = 94;
let changeme = 82;

console.log(`invicible=${invicible} but changeme = ${changeme}`);

// this will work fine;

changeme = 100;
console.log(`${changeme}`)
// The commented out code below won't work. 
// An error will occur if the constant variable
// invicible is assigned to something new
// invicible = 10000;
console.log(`${invicible}`)

