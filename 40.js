const input=require("readline-sync");
let a=input.questionInt("enter");
let b=input.questionInt("enter");
let c=input.questionInt("enter");
let d=input.questionInt("enter");
let e=input.questionInt("enter");
let count=1;
if(a==b)
{
  count+=1;
  if(a==c)
  {
   count+=1;
   if(a==d)
   {
    {
        
    }count+=1;
    if(a==e)
    {
     count+=1;
    }else
    {
     if(a==d){
     count+=1;
      if(a==c)
      {
       count+=1;
       if(a==b)
       {
        count+=1;
       }
      }
     }
    }
   }else
   {
    if(a==b)
    {
     count+=1;
     if(a==c)
     {
      count+=1;
      if(a==e)
      {
       count+=1;
      }
     }
    }
   }
  }else
  {
   if(a==b)
   {
    count+=1;
    if(a==d)
    {
     count+=1;
     if(a==e)
     {
      count+=1;
     }
    }
   }
  }
}else
{
 if(a==c)
 {
  count+=1;
  if(a==d)
  {
   count+=1;
   if(a==e)
   {
    count+=1;
   }
  }
 }
}
console.log(a,"-",count);