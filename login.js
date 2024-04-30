function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }

   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");

   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += " white-btn";
       b.className = "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
   }

   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className = "btn";
       b.className += " white-btn";
       x.style.opacity = 0;
       y.style.opacity = 1;
   }

   //form validation

   const form =document.querySelector('#form');
   const Firstname =document.querySelector('#Firstname');
   const Lastname =document.querySelector('#Lastname');
   const Email =document.querySelector('#Email');
   const Password =document.querySelector('#Password');

   form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
    
   })

   function validateInputs(){
    const FirstnameVal=Firstname.value.trim()
    const LastnameVal=Lastname.value.trim();
    const EmailVal=Email.value.trim();
    const PasswordVal=Password.value.trim();

   if(FirstnameVal===''){
    setError(Firstname,'Firstname is required')

   }
   else{
    setSuccess(Firstname)
   }
   
   if(LastnameVal===''){
    setError(Lastname,'Lastname is required')

   }
   else{
    setSuccess(Lastname)
   }

   if(EmailVal===''){
    setError(Email,'Email is required')
   }
   else if (!validateEmail(EmailVal)){
    setError(Email,'Enter your correct mail id')
   }
   else{
    setSuccess(Email)
   }

   if(PasswordVal===''){
    setError(Password,'Enter password')
   }
   else if (PasswordVal.length<8){
    setError(Password,'Pasword must be in 8 * characters')
   }
   else{
    setSuccess(Password)
   }


   }
   //element -password,msg-pwd is required

   function setError(element,message){
    const inputBox =element.parentElement;
    const errorElement=inputBox.querySelector('.error')

    errorElement.innerText=message;
    inputBox.classList.add('error')
    inputBox.classList.remove('success')
   }

   function setSuccess(element,message){
    const inputBox =element.parentElement;
    const errorElement=inputBox.querySelector('.error')

    errorElement.innerText='';
    inputBox.classList.add('success')
    inputBox.classList.remove('error')
   }

   const validateEmail =(email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

   }

