
function register(){
    //hide page to open
    document.querySelector(".login-form").style.display = "none";
    
    document.querySelector(".register-form").style.display = "";
    registerValidation();
}

function login(){
    //hide page to open
    document.querySelector(".register-form").style.display = "none";
    
    document.querySelector(".login-form").style.display = "";
    validateLoginForm();
}



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
  function checkSelect(field) {
    if ( field.selectedIndex === 0 ) {
      field.setCustomValidity('Invalid');
      addError(field);
    } else {
      field.setCustomValidity('');
      removeError(field);
    }
  }


  window.addEventListener('load', function(e) {
    const form  = document.getElementById('form1');
    
       
    const emailField = form.email;
    emailField.dataset.errorMsg = 'You must enter a valid email.';

    const password = form.password;
    password.dataset.errorMsg = 'password must have minimum 5 characters.';



    emailField.addEventListener('input', function(e) {
      checkField(emailField);
    });

    password.addEventListener('input', function(e) {
      checkField(password);
    });
 

  const form1  = document.getElementById('form');
        
  const username = form1.name;
  username.dataset.errorMsg = 'Username must be 5 to 25 characters.';
 
  const emailField1 = form1.email1;
  emailField1.dataset.errorMsg = 'You must enter a valid email.';

  const password1 = form1.password1;
  password1.dataset.errorMsg = 'password must have minimum 5 characters.';
  
  const referral = form1.referral;
  referral.dataset.errorMsg = 'Please choose an answer.';


  const terms = form1.term;
  terms.dataset.errorMsg = 'Please choose an answer.';

  terms.addEventListener('input', function(e) {
      checkField(terms);
    });

  username.addEventListener('input', function(e) {
      checkField(username);
    });

  emailField1.addEventListener('input', function(e) {
    checkField(emailField1);
  });

  password1.addEventListener('input', function(e) {
    checkField(password1);
  });

  

referral.addEventListener('change', function(e) {
checkSelect(referral);
});




form.addEventListener('submit', function(e) {
        
            
  // Check errors-login page
  checkField(password);
  checkField(emailField);
 

 // If form is invalid, prevent submission
 if (!form.checkValidity()) {
  e.preventDefault();
  alert('Please fix form errors.');
}
//if form is valid,submission takes place

else{
  e.preventDefault();
  alert("form  submitted.");
  form.reset();
 
} 
});


form1.addEventListener('submit', function(e) {
        
            
  // Check errors-register page
 
  checkField(password1);
  checkField(username);
  checkField(emailField1);
  checkField(terms);
  checkSelect(referral);

 // If form is invalid, prevent submission
 if (!form1.checkValidity()) {
  e.preventDefault();
  alert('Please fix form errors.');
}
//if form is valid,submission takes place
else{
  e.preventDefault();
  alert("form  submitted.");
  form1.reset();

}
  

  
});


  });


 