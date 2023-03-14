var form = document.getElementById("validation-input");
form.addEventListener("focus", function( event ) {
  event.target.style.borderColor = "validation-input.valid";
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.borderColor = "validation-input.invalid";
}, true);