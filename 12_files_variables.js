const fs = require('fs');

const print_lines = (err, data) => {
	console.log(data.toString());
}

const yell_at_me = (what) => {
	return what.toUpperCase();
}

fs.readFile("poem.txt", print_lines);

fs.readFile("poem.txt", (err, data) => {
	yelling = yell_at_me(data.toString());
	print_lines(err, yelling);
});