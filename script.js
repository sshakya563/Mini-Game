const result=(computer,user)=>{
  if(user==computer){   
    return 0
      }
  else if(computer==1 && user==2){
    return -1
  }
   else if(computer==2 && user==3){
    return -1
  }
  else if(computer==3 && user==1){
    return -1
  }
  return 1
}
////////////Take all the value 
let runAgain=true;
while(runAgain){  
  let user=prompt("Enter 1 for Snake, 2 for water, 3 for Gun");   
  if(typeof user=="object"){
      break; ////if user not pass any value
    }

user=Number.parseInt(user);
let computer=Math.floor(Math.random() * 3) + 1;
let score=result(computer,user);

/////Checke the scole of user 
if(score==0){  
   alert(`Computer ${computer} \nYou ${user}\n It's a draw`)  }
else if(score==-1){  
   alert(`Computer ${computer} \nYou ${user}\nYou lose`)
 }
else if(user>3)alert("Please Enter valid number ")////if pass invalid data
  
else{
  alert(`Computer ${computer} \nYou ${user}\n Congragulation! You win`)
}  
  runAgain=confirm(`Do your want to play again`)
}

