function addError(field) {
    if (field.previousElementSibling &&
      field.previousElementSibling.className === 'error') {
      // error message already showing
      return;
    }
    const error = document.createElement('div');
    error.innerHTML = '&#x26A1; '
      + field.dataset.errorMsg;
    error.className = 'error';
    field.parentNode.insertBefore(error, field);
  }
  
  function removeError(field) {
    if (field.previousElementSibling &&
      field.previousElementSibling.className === 'error') {
      field.previousElementSibling.remove();
    }
  }
  
  function checkField(field) {
    if (!field.checkValidity()) {
      addError(field);
    } else {
      removeError(field);
    }
  }
  window.addEventListener('load', function(e) {
    const form  = document.getElementById('my-form');
    const email = form.email;
    email.dataset.errorMsg = 'Invalid Email';
    const username = form.username;
    username.dataset.errorMsg = 'Username must be 8 to 25 characters.';
    
    const message = form.message;
    message.dataset.errorMsg = 'Your comment must be between ' +
      message.minLength + ' and ' + message.maxLength + 
      ' characters.';
    
  
    // Get the input and textarea fields
    const inputFields = document.querySelectorAll('input, textarea');
  
    // Loop through the input fields, marking them all "untouched"
    for (field of inputFields) {
      field.dataset.status = 'untouched';
    }
    
    // When a user changes the value of a text-like input or textarea,
    //  mark the field "touched"
    //  validate the field
    username.addEventListener("change", function(e) {
      username.dataset.status = 'touched';
      checkField(username);
    });
  
    // When a user inputs data into a text-like input or textarea
    //  that has been touched, validate the field
    username.addEventListener("input", function(e) {
      if (username.dataset.status === 'touched') {
        checkField(username);
      }
    });
    
    email.addEventListener("change", function(e) {
      email.dataset.status = 'touched';
      checkField(email);
    });
    email.addEventListener("input", function(e) {
      if (email.dataset.status === 'touched') {
        checkField(email);
      }
    });
  
   
  
    message.addEventListener("change", function(e) {
      message.dataset.status = 'touched';
      checkField(message);
    });
    message.addEventListener("input", function(e) {
      if (message.dataset.status === 'touched') {
        checkField(message);
      }
    }); 
  
    form.addEventListener("submit", function(e) {
      // Mark all fields touched
      for (field of inputFields) {
        field.dataset.status = 'touched';
      } 
      // Check errors
      checkField(email);
      checkField(message);
      checkField(username);
      
  
      // If form is invalid, prevent submission
      if (!form.checkValidity()) {
        e.preventDefault();
        alert('Please fix form errors.');
      }
      else{
        e.preventDefault();
        alert("form  submitted.");
        form.reset();
      }
    });
  });