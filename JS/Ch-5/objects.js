const object={
    name:"John",
    age:30,
    marks:50,
};
console.log(object["age"]);
let obj={
    1:"a",
    2:"b",
    3:"c",
    null:4,

};
console.log(obj[null])
let obj1={
    name:"ukasha",
    section : "3F",
    rollno: 52,
};
console.log(obj1);
obj1.degree="BSCS";
console.log(obj1);
obj1.sem="2nd";
console.log(obj1);
delete obj1.section;
console.log(obj1);
//nested objects 
let obj2={
   ukasha : {
        age:20,
        sems:3,
        },
    inam:{
        age:21,
        sems:4,
    }
    
};
console.log(obj2.ukasha["age"])
let obj3=[
{
    nam:"farhan",
   age :13,

},
{
nam:"fakhir",
age:14,
},
{
    nam:"fahad",
    age: 15,
}

];
console.log(obj3[0].age);
obj3[1].id= 52;
obj3[0].id=219;
console.log(obj3);
obj3[1].sub= ["eng","urdu","math"];
console.log(obj3);
//math 
//round about largest value (6)
console.log(Math.ceil(5.5))
//round about smallest value (5)
console.log(Math.floor(5.5))
//absolute value 
console.log(Math.abs(-3.92743))
//power
console.log(Math.pow(2,3))
//random 
console.log(Math.random())
//creat num from random number 
let one=Math.random();
 one=one*10;
 console.log(one);
let two=Math.floor(one);
console.log(two+1);
//practice
let one1=Math.random();
 one1=one1*100;
 console.log(one1);
let two2=Math.floor(one1);
console.log(two2+1);

Math.floor(Math.random()*21)
console.log(Math.floor(Math.random()*5)+10)

