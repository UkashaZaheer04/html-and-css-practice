let arr=[1,2,3,4];
console.log(arr);
let arr2=["ukasha","ayesha","alia"];
console.log(arr2);
let primary=[1,2,3,4];
let secondary=["ukasha","ayesha","alia"];
//merging two arrays 
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));
console.log(primary. reverse());
//string is immutable
let a="                  abc   ";
 
 console.log(a.trim() )
 console.log(a);
 let arr3=[1,2.5,"ukasha"];
 console.log(arr3);
 console.log(arr3.length);

 arr3[2]="ayesha"
 console.log(arr3);
 //push:add element in the end 
arr3.push("inam")
console.log(arr3);
//pop:remove element from th eend and then return it
console.log(arr3.pop());
console.log(arr3);
//unshift : add element in the start 
console.log(arr3.unshift("ukasha"));
console.log(arr3);
//shift to remove element from the start 
console.log(arr3.shift("ukasha"));
console.log(arr3);
let months=["jan","feb", "apr", "dec","jun"]
// console.log(months.shift());
// console.log(months);
// console.log(months.shift());
// console.log(months);
// console.log(months.unshift("mar"));
// console.log(months);
// console.log(months.unshift("feb"));
// console.log(months);
// console.log( months.indexOf("apr"));
// console.log( months.indexOf("july"));
// console.log( months.includes("july"));
// console.log( months.includes("apr"));
console.log( months.slice(1,3));
console.log(months);
console.log( months.slice(2,4));
console.log(months);
console.log( months.splice(1,3));
console.log(months);
//slice 
let uk=[1,2,3,4,5];
console.log(uk.slice(1,3)); 
console.log(uk );
//splice 
console.log(uk.splice(1,3));
console.log(uk);
console.log(uk.splice(1,0,2));
console.log(uk);
console.log(uk.splice(2,0,4));
console.log(uk);
let start =['january','july','march','august'];
start.splice(0,1);
start.splice(1,0,'june')
console.log(start);
let lan=['c','c++','html','js','pythin','java','c#','sql'];
lan.reverse();
console.log(lan);
console.log(lan.indexOf('js'));

//copy array 
let arr1=[1,2,3,4,5];
let arrCopy=arr1;
arr1.push(6);
console.log(arrCopy);
arr1.pop();
console.log(arrCopy);
//nested array 
let array =[[1,2,3],[4,5,6]];
console.log(array);
console.log(array[1][2]);






 


 
