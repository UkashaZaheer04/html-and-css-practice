for(let i=0;i<=15;i++)
    {
        if (i%2!=0)
        {
           console.log(i);
        }
    
    }
    //without condition 
    for(let i=1;i<=15;i=i+2){
       console.log(i); 
    }
    //even 
    for (let i=2;i<=10;i++)
    {
        if (i%2==0)
        {
            console.log(i);
        }
    }
    for (let i=2;i<=10;i=i+2)
    {
        console.log(i);
    }
    //input 
    /*  let n = prompt("Enter number ");
    n = parseInt(n); */
/* for (let i=n;i<=n*10;i=i+n)
{
   console.log(i);

}  */
 //nested loops with array 
 let arr = [[1,2,3],[4,5,6]];
for (let i=0;i<arr.length;i++)
{
    // console.log(arr[i],arr[i].length);
    for (let j=0;j<arr[i].length;j++)
    {
        console.log(arr[i][j]);
    }
}
let hero=[11,22,33,44]
{
    for(hero of hero){
        console.log(hero)
    }

    
}