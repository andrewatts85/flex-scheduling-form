// retrieve the form element, assuming it exists as "<div id="signup">
var apptForm = document.getElementById("apptForm");
var theDAte = document.getElementById("theDate");
var time = document.getElementById("time");
var contactNumber = document.getElementById("contactNumber");
var email = document.getElementById("email");
var timeZone = document.getElementById("timeZone");

apptForm.addEventListener('submit', function (event) {
    validator.isDate(theDate.value) ? theDate.className = "valid" : theDate.className = "invalid";
    validator.isPhoneNumber(contactNumber.value) ? contactNumber.className = "valid" : contactNumber.className = "invalid";
    validator.isEmailAddress(email.value) ? email.className = "valid" : email.className = "invalid";
    timeZone.value ? timeZone.className = "valid" : timeZone.className = "invalid";
    time.value ? time.className = "valid" : time.className = "invalid";
  
    // stop the event from its default action: submitting the form (for our validation, submission is not desired)
    event.preventDefault();
});
