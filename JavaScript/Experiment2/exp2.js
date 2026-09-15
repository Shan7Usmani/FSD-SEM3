const fs = require("fs");

// CREATE
fs.writeFileSync("example.txt", "Hello, Node.js!");

// READ
const data = fs.readFileSync("example.txt", "utf8");
console.log("File Content:", data);

// UPDATE
fs.appendFileSync("example.txt", "\nThis is updated content.");

// DELETE
fs.unlinkSync("example.txt");

console.log("CRUD operations completed successfully.");