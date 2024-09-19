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
     let n = prompt("Enter number ");
    n = parseInt(n);
for (let i=n;i<=n*10;i=i+n)
{
   console.log(i);

} 
 