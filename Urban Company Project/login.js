
let loginBtn=document.querySelector(".login-btn")
let del=document.querySelector(".del")

//add login page
loginBtn.addEventListener("click",openLoginTab)
function openLoginTab(){
    document.querySelector(".overLayer1").classList.add("showOverLayer1");
    document.querySelector(".loginForm").classList.add("showLogin");
}
//remove login page by clicking btn
del.addEventListener("click",closeLoginTab);
function closeLoginTab(){
    document.querySelector(".overLayer1").classList.remove("showOverLayer1");
    document.querySelector(".loginForm").classList.remove("showLogin");
}


let signUpBtn=document.querySelector(".signup-btn")
let clr=document.querySelector(".clr")
//add signup page
signUpBtn.addEventListener("click",closeLoginTab)
signUpBtn.addEventListener("click",openSignupTab)
function openSignupTab(){
    document.querySelector(".overLayer2").classList.add("showOverLayer2");
    document.querySelector(".signupForm").classList.add("showSignup");
}

//remove signup page by clicking btn
clr.addEventListener("click",closeSignupTab);
function closeSignupTab(){
    document.querySelector(".overLayer2").classList.remove("showOverLayer2");
    document.querySelector(".signupForm").classList.remove("showSignup");
}


//remove by clicking outside of div
let del2=document.querySelector(".overLayer1")
del2.addEventListener("click",closeLoginTab);
let del2o=document.querySelector(".overLayer2")
del2o.addEventListener("click",closeSignupTab);
