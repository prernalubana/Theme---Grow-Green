

function validateForm() {

    var f_name = document.getElementById("f_name").value;
    var phone_no = document.getElementById("phone_no").value;
    var newPassword = document.getElementById("newpassword").value;
    var confirm_Pass = document.getElementById("confirm_password").value;
 
    if (!isNaN(f_name)) {
        alert("Enter a Valid Name");
        return false;
    }

    if (phone_no.length != 10) {
        alert("Enter a valid mobile number");
        return false;
    }

    if(newPassword.length<8)
    {
        document.getElementById("password_error").innerHTML = "** Password length should be of minimum 8 characters!";
        return false;
    }

    if(newPassword.search(/[0-9]/)==-1)
    {
        document.getElementById("password_error").innerHTML = "** Password length must contain atleast 1 numeric character!";
        return false;
    }
    if(newPassword.search(/[a-z]/)==-1)
    {
        document.getElementById("password_error").innerHTML = "** Password length must contain atleast 1 lowercase character!";
        return false;
    }
    if(newPassword.search(/[A-Z]/)==-1)
    {
        document.getElementById("password_error").innerHTML = "** Password length must contain atleast 1 Upercase character!";
        return false;
    }
    if (newPassword!= confirm_Pass) {
        document.getElementById("password_error").innerHTML = "";
        document.getElementById("match_error").innerHTML = "** Password and Confirm donot match!";
        return false;
    }

}

