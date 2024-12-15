const clock=document.querySelector('#clock')
let flag=1
setInterval(function(){
  let date =new Date();
  clock.innerHTML=date.toLocaleTimeString();
  
  if(flag){
    clock.style.backgroundColor='green'
 flag=0
  }else{
    clock.style.backgroundColor='orange'
    flag=1;
  }
},1000);