//roll dice function 
function rollDice(){
let random = Math.floor(Math.random()*6)+1;
console.log(random);
}
rollDice();
rollDice();
//practice 
function table(n){
   for (let i=n;i<=n*10;i=i+n)
   {
    console.log(i);
   }
}
table(2);
function add(a,b)
{
    let sum=a+b;
    return sum;
}
let sum=add(4,5);
console.log(sum);
//concat 
let str=["i","love","coding"];
function string(str){
    let result=str.join(" ");
    console.log(result);
}
string(str);
//lexical scope 
//variable declare outside the function in outer function can be accessible but variable  declare inisde the function cannot be used outside function 
//nested function 
function outer(){
    let x=10;
    function inner(){
        // let y=20;
        console.log(x);
    }
    // console.log(y);
    inner();
}
outer();
//block scope 
// {
//      let a=5;
// }
// console.log(a);
//practice 
let greet ="hello";
function fun()
{
    let Greet="Salam";
    console.log(Greet);
    function iner()
    {
        console.log(Greet);
    }
    iner();
}
console.log(greet);
fun();
//variable function 
let addi=function(a,b)
{
    let res=a+b;
    console.log(res);
}
addi(1,2);
//multiple greet 
  let  multipleFun = function(funo,n)
{
    for(let i=1;i<=n;i++)
    {
        say();
    }
}
let say=function()
{
    console.log("hello");
}
multipleFun(say,3)
//methods 
let obj={
    add:function(a,b)
    {
        return (a+b);
    },
    sub:function(a,b)
    {
        return (a-b);
    },
  mul:function(a,b)
  {
    return (a *b);
  },
  //div:function(a,b)
  div(a,b)
{
    return (a/b);
}
}
console.log(obj.add(1,2));
console.log(obj.mul(8,2));
console.log(obj.div(8,2));