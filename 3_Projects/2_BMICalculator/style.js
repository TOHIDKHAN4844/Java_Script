const form= document.querySelector('form')
const results=document.querySelector('#results')


form.addEventListener('submit',function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
   
  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML="Plz Give Valid Height"
  }else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML="Plz Give Valid weight"
  }else{
    const BMI=(weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>
    Your BMI is ${BMI}
      </span>`
  }
})


