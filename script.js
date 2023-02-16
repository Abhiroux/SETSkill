
// Variables section //

let registerBtn = document.getElementById('registerBtn');
let login =  document.getElementById('login');
let signup = document.getElementById('signup');
let sideHeading =document.getElementById('sideHeading');
let sideHeading2 = document.getElementById('sideHeading2');
let sideHeading3 = document.getElementById('sideHeading3');
const username =  document.getElementById('username');
const password = document.getElementById('password');
let loginBtn =  document.getElementById('loginBtn');

let signupBtn = document.getElementById('signupBtn');
let fullName = document.getElementById('fullName');
let emailId = document.getElementById('emailId');
let signupPassword = document.getElementById('signup-password');
let cnfPassword = document.getElementById('confirm-password');


registerBtn.addEventListener("click", ()=> {
    if(registerBtn.innerHTML=="Register"){
        signup.classList.remove('sr-only')
        login.classList.add('sr-only')
        sideHeading.innerHTML="Welcome Back";
        sideHeading2.innerHTML="Nice to see you again";
        sideHeading3.classList.add('sr-only');
        registerBtn.innerHTML="Log in";
    }
    else{
        login.classList.remove('sr-only');
        signup.classList.add('sr-only');
        sideHeading.innerHTML="Welcome";
        sideHeading2.innerHTML="Nice to see you";
        sideHeading3.classList.remove('sr-only');
        registerBtn.innerHTML="Register";
    }

});

loginBtn.addEventListener("click",()=>{
    if(username.value==""){
        alert("Enter Username");
        return false;
    }
    else if(password.value==""){
        alert("Enter password");
        return false
    }
})


signupBtn.addEventListener("click",()=>{
    if(fullName.value=="" || emailId.value=="" || signupPassword.value=="" || cnfPassword.value==""){
        alert("Please, Enter all the details");
        return false;
    }
    else if(signupPassword.value!=cnfPassword.value){
        alert("Password doesn't match!! Please Re-enter Password");
        return false;
    }
})

