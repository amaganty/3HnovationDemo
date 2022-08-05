// Validation for email/password inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var check_email = document.getElementById('check_email');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated() {
    let isvalidated = false;
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if(regx.test(email.value)){
        email.style.border = "1px solid silver"
        check_email.style.display = "none";
        isvalidated = true;
    }
    if(!regx.test(email.value)) {
        email.style.border = "1px solid red";
        check_email.style.display ="block";
        isvalidated = false;
    }
    

    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block"
        email.focus();
        isvalidated = false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block"
        password.focus();
        isvalidated = false;
    }
    return isvalidated; 
}

function email_Verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid red";
        email_error.style.display = "none";
        return true;
    }
}

function pass_Verify(){
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}

