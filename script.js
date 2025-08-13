const uname = document.getElementById("username");
const email = document.getElementById("Email");
const password = document.getElementById("password");       
const cpassword = document.getElementById("cpassword");
const form = document.getElementById("form");
let succcess=true;
form.addEventListener("submit", (e) => {
    
if(!checkInputs()){
    e.preventDefault();// Prevent form submission if error occurs
};
})
function checkInputs(){
    const unameValue = uname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(unameValue === ""){
        succcess=false;
        setErrorFor(uname, "Username cannot be blank");
    } else {
        setSuccessFor(uname);
    }
    if(emailValue === ""){
        succcess=false;
        setErrorFor(email, "Email cannot be blank");
    } else if(!validEmail(emailValue)){
        setErrorFor(email, "Not a valid email");
    } else {
        setSuccessFor(email);
    }
    if(passwordValue === ""){ 
        succcess=false;
        setErrorFor(password, "Password cannot be blank");
    }      
    else if(passwordValue.length < 8){  
        setErrorFor(password,"Password must be 8 character");

    }
    else{
        setSuccessFor(password);
    }
    if(cpasswordValue === ""){
        succcess=false;
        setErrorFor(cpassword, "Confirm Password cannot be blank");
    } else if(cpasswordValue !== passwordValue){
        setErrorFor(cpassword, "Passwords do not match");
    } else {
        setSuccessFor(cpassword);
    }
    return succcess;
}

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const errorElement = formControl.querySelector(".error");

    // Add error message inside small tag
    errorElement.innerText = message;

    // Add error class to form control
    formControl.classList.add('error');
    formControl.classList.remove('succcess');
}
function setSuccessFor(input){
    const formControl = input.parentElement; // .form-control
    const errorElement = formControl.querySelector(".error");

    errorElement.innerText ='';

    formControl.classList.add('success');
    formControl.classList.remove('error');
}
const validEmail=(email)=>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}