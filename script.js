let btn=document.querySelector("#newsletter_form button");
let input=document.getElementById("email_input")
let main=document.getElementById("main_outer2")
let error=document.getElementById("hidden")
let page2=document.getElementById("sucess_main")
let dismissMessage=document.getElementById("second_btn")
let user_email=document.getElementById("user_sucess")
btn.addEventListener("click" ,(e)=>{
   e.preventDefault();
   let reg= /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
   if(reg.test(input.value))
      {
         main.style.display="none"
         page2.style.display="block"
         user_email.innerText=input.value;
         
      }
      else{
         error.style.display="inline"
         input.style.border="1px solid rgb(255, 106, 106)"
         input.style.backgroundColor="rgb(255, 214, 214)"
      }
})
dismissMessage.addEventListener("click", (e)=>{
   e.preventDefault();
   page2.style.display="none"
   main.style.display="flex"
   input.value=""
   error.style.display="none"
   input.style.border="1px solid hsl(231, 7%, 60%)"
   input.style.backgroundColor="rgb(243, 240, 240)"
})