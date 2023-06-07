document.addEventListener("DOMContentLoaded", function () {
  var datepicker = document.getElementById("datepicker");
  var displayDate = document.getElementById("displayDate");

  datepicker.addEventListener("input", function () {
    var selectedDate = datepicker.value;
    displayDate.textContent = selectedDate;
  });
});

/*
function clearErrors(){
  errors = document.getElementsByClassName('formerror');
  for(let item of errors){
    item.innerHTML = "";
  }
}


function seterror(id,error){
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}


function validateForm(){
  var returnval = true;
  clearErrors();

  var fname = document.forms['myForm']['fname'].value;
  if(fname.length<5){
    seterror("fname","first name cannot be too short")
    returnval = false;
  }

  var lname = document.forms['myForm']['lname'].value;
  if(lname.length<5){
    seterror("lname","last name cannot be too short")
    returnval = false;
  }

  var email = document.forms['myForm']['femail'].value;
  if(email.length<5){
    seterror("femail","email cannot be too short")
    returnval = false;
  }

  var phone = document.forms['myForm']['phone'].value;
  if(phone.length!=10){
    seterror("phone","phone cannot be <10")
    returnval = false;
  }

  return returnval;
}


/*

const form = document.getElementById("myForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".formerror");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".formerror");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


const validateInputs = () => {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = password.value.trim();

  if (fnameValue === "") {
    setError(fname, "Username is required");
  } else {
    setSuccess(fname);
  }

  if (lnameValue === "") {
    setError(lname, "Username is required");
  } else {
    setSuccess(lname);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phone, "Password is required");
  } else if (phoneValue.length < 8) {
    setError(phone, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

};*/

/*
function validateForm() {
  var firstname = document.forms["myForm"]["firstname"].value;
  var lastname = document.forms["myForm"]["lasttname"].value;
  var email = document.forms["myForm"]["email"].value;
  var phonenumber = document.forms["myForm"]["phonenumber"].value;
  var city  = dcocument.forms["myForm"]["city"].value;
  var appliedposition = document.forms["myForm"]["appliedposition"].value;

  if (firstname === "") {
    document.getElementById("firstnameError").innerHTML = "Name is required";
    return false;
  }
  if (lastname === "") {
    document.getElementById("lastnameError").innerHTML = "Name is required";
    return false;
  }

  if (email === "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    return false;
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {
    document.getElementById("emailError").innerHTML = "Invalid email format";
    return false;
  }

  if (phonenumber === "") {
    document.getElementById("phoneError").innerHTML =
      "Mobile number is required";
    return false;
  }

  var phoneRegex = /^\d{10}$/;
  if (!phonenumber.match(phoneRegex)) {
    document.getElementById("phoneError").innerHTML = "Invalid mobile number";
    return false;
  }

  if(city ===""){
    document.getElementById("cityError").innerHTML = "select city";
    return false;
  }

  if (appliedposition === "") {
    document.getElementById("positionError").innerHTML =
      "Applied position is required";
    return false;
  }
  */


function handleApply(){
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var email = document.getElementById("mail").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var gender = document.getElementById("gender").value;
  var city = document.getElementById("city").value;
  var appliedposition = document.getElementById("appliedposition").value;
  var earliestdate = document.getElementById("earliest-possible-date").value;
  var preferredinterviewdate = document.getElementById("datepicker").value;

  localStorage.setItem("1 first name", fname);
  localStorage.setItem("2 last name", lname);
  localStorage.setItem("3 email", email);
  localStorage.setItem("4 phone number", phonenumber);
  localStorage.setItem("5 gender", gender);
  localStorage.setItem("6 city", city);
  localStorage.setItem("7 applied position", appliedposition);
  localStorage.setItem("8 earliest possible start date", earliestdate);
  localStorage.setItem("9 preferred interview date", preferredinterviewdate);

  // console.log(localStorage.setItem("firstName"));
  document.getElementById('result').innerHTML = localStorage.getItem(fname);

  // Show success popup
  alert("You have successfully applied for the Full-Stack Developer job");
}
var applyButton = document.getElementById("btn");
applyButton.addEventListener("click", handleApply);






