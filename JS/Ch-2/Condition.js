let a = 4;
if (a < 5) {
    console.log("num is write")
}
let name = "ukasha";
if (name != "ukasha") {
    console.log("You are not a member");
}
else {
    console.log(` Welcome ${name} `);
}
name = "ayesha";
if (name != "ukasha") {
    console.log("You are not a member");
}
else {
    console.log(` Welcome ${name} `);
}
let color = "yellow";

if (color == "red") {
    console.log(" STOP");
}
if (color == "yellow") {
    console.log("Start");
}
if (color == "green") {
    console.log("GO");
}
//else if 
let age = 16;
if (age == 18) {
    console.log("You are an accurate");
} else if (age < 18) {
    console.log("You are a minor");
}
else if (age > 18) {
    console.log("You are an adult");
}
let marks = 80;
if (marks >= 80) {
    console.log("Your grade is A+");
} else if (marks >= 60 && marks < 80) {
    console.log("Your grade is B+");
}
else if (marks < 50) {
    console.log("Your grade is F");
}
//Practice Qs
let popcornSize = "XS";
if (popcornSize == "XL") {
    console.log("Price is 250 Rs.")
} else if (popcornSize == "X") {
    console.log("Price is 200 Rs.")
}
else if (popcornSize == "M") {
    console.log("Price is 150 Rs.")
}
else if (popcornSize == "S") {
    console.log("Price is 100 Rs.")
}
else {
    console.log("Invalid size");
}





