document.addEventListener("DOMContentLoaded", function () {
  var datepicker = document.getElementById("datepicker");
  var displayDate = document.getElementById("displayDate");

  datepicker.addEventListener("input", function () {
    var selectedDate = datepicker.value;
    displayDate.textContent = selectedDate;
  });
});


// Get form elements
const form = document.querySelector('.form');
const firstnameField = document.getElementById('firstname');
const lastnameField = document.getElementById('lastname');
const emailField = document.getElementById('mail');
const phoneField = document.getElementById('phonenumber');
const genderField = document.querySelectorAll('input[name="gender"]');
const cityField = document.getElementById('city');
const positionField = document.getElementById('appliedposition');
const startDateField = document.getElementById('earliest-possible-date');
const interviewDateField = document.getElementById('datepicker');

// Save form data to local storage
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    firstname: firstnameField.value,
    lastname: lastnameField.value,
    email: emailField.value,
    phone: phoneField.value,
    gender: getSelectedValue(genderField),
    city: cityField.value,
    position: positionField.value,
    startDate: startDateField.value,
    interviewDate: interviewDateField.value
  };

  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Form data saved!');
});

// Retrieve and populate form data on page load
window.addEventListener('load', function() {
  const storedData = localStorage.getItem('formData');
  if (storedData) {
    const formData = JSON.parse(storedData);
    firstnameField.value = formData.firstname;
    lastnameField.value = formData.lastname;
    emailField.value = formData.email;
    phoneField.value = formData.phone;
    setSelectedValue(genderField, formData.gender);
    cityField.value = formData.city;
    positionField.value = formData.position;
    startDateField.value = formData.startDate;
    interviewDateField.value = formData.interviewDate;
  }
});

//get the selected value from a group of radio buttons
function getSelectedValue(radioGroup) {
  for (let i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].checked) {
      return radioGroup[i].value;
    }
  }
  return null;
}

// set the selected value for a group of radio buttons
function setSelectedValue(radioGroup, value) {
  for (let i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].value === value) {
      radioGroup[i].checked = true;
      break;
    }
  }
}



// validations 



// Regular expressions for validation
const namecond = /^[A-Za-z\s]{2,50}$/;
const emailcond = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const mobilecond = /^\d{10}$/;
const positioncond = /^[a-zA-Z0-9\s\W]{1,50}$/;

// Function to validate form fields
function validateForm() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('mail').value;
  const phone = document.getElementById('phonenumber').value;
  const position = document.getElementById('appliedposition').value;

  if (!namecond.test(firstname)) {
    alert('Please enter a valid first name');
    return false;
  }

  if (!namecond.test(lastname)) {
    alert('Please enter a valid last name');
    return false;
  }

  if (!emailcond.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (!mobilecond.test(phone)) {
    alert('Please enter a valid phone number (e.g., 000-000-0000)');
    return false;
  }

  if (!positioncond.test(position)) {
    alert('Please enter a valid applied position');
    return false;
  }

  return true;
}


form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateForm()) {
    form.submit();
  }
});
