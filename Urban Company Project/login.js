
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

//submit data to local storage
let form=document.querySelector(".signupForm")
let lsData;

let submitData=document.getElementById("sub-sign")
submitData.addEventListener("click",(e) =>{
    e.preventDefault();
    let obj={
        userId:form.email.value,
        createPassword:form.createPass.value,
        conformPassford:form.confPass.value        
    }
        //   sign up 
    let signupData=JSON.parse(localStorage.getItem("signData"))
    if(signupData==null){
        signupData=[];
    }
    if(obj.createPassword===obj.conformPassford){
        console.log("yes")
        signupData.push(obj)
        localStorage.setItem("signData",JSON.stringify(signupData))
        alert("Sign Up Successful")
        closeSignupTab(); 
        openLoginTab();   
    }else{
        console.log("No")
        alert("Your Conformation Password does not match the new password")
    }
})
lsData=JSON.parse(localStorage.getItem("signData"))
let loginData=document.getElementById("sub-log")

loginData.addEventListener("click",login)
let userName;
let password
let nav=document.getElementById("navBar");
function login(){
     userName=document.getElementById("newEmail").value
     password=document.getElementById("password").value
    let temp=false;
   lsData.forEach((element,index) => {
        if(userName===element.userId && password===element.createPassword){
            temp=true;
        }
    });
console.log(temp)
    if(temp){
        closeLoginTab()
        alert("Log In Successful")
        loginBtn.innerHTML=null  
        let para=document.createElement("p")
        para.innerText=userName;
        nav.append(para);
        //    loginBtnText=userName;
    }else{
        alert("Email or Password is incorrect")
    }
}

   

