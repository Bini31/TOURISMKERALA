function Clear(clear) {
    if (clear == 'clear') {
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("rpassword").value = "";
        document.getElementById("msg").innerHTML = ""

    }

}
var myInput = document.getElementById("password");
var msgpass = document.getElementById("message");

function repeatpasswordvalidate()
{
    var rp=document.getElementById("rpassword")
    if(rp.value==myInput.value){
        return true;
    }
    else{
        alert("Repeat password is not matching");
    
}
}
myInput.onfocus = function () {
    msgpass.removeAttribute("hidden", "true")
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

function validatePassword(password) {

    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }



    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;


}
var myemail=document.getElementById("email");
let error=document.getElementById("error");
function validate()
{ let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})?$/
  if(regexp.test(myemail.value)){
      error.innerHTML="valid";
      error.style.color="green";
      return true;
  }
  else{
      
      error.innerHTML="invalid";
      error.style.color="red";
      return false;
  }
  
}
function trimvalid()
{
    if(myemail.value.trim()==""||myInput.value.trim()=="")
  {
      alert("Fields cannot be empty");
      error.innerHTML="invalid";
      error.style.color="red";
      return false;
  }
  else{
    error.innerHTML="valid";
    error.style.color="green";
return true;
  }
}
let error1=document.getElementById("error1");
let phonenumber=document.getElementById("phone")
function phonenumbervalidation()
{
var phoneno=/^\d{10}$/;
var phoneno1=/^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
if(phoneno.test(phonenumber.value))
{
    error1.innerHTML="valid";
error1.style.color="green";
    return true;
}
else if(phoneno1.test(phonenumber.value))
{error1.innerHTML="valid";
error1.style.color="green";
    return true;
}
else{
    alert("Enter only 10 numbers in the phone number field and follow this 3 formats(XXX-XXX-XXXX,XXX.XXX.XXXX,XXX XXX XXXX)");
    error1.innerHTML="invalid";
      error1.style.color="red";
    return false;
}
}

$(document).ready(function () {
    $("#loginButton").click(function () {
        $("#loginmodal").modal();
    });
    $("#SignUpButton").click(function () {
        $("#signup").modal();
    });
    $('[data-toggle="option1"]').toggle();
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-pause").click(function () {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function () {
        $("#mycarousel").carousel('cycle');
    });
    $("#mycarousel2").carousel({ interval: 2000 });
    $("#carousel-pause").click(function () {
        $("#mycarousel2").carousel('pause');
    });
    $("#carousel-play").click(function () {
        $("#mycarousel2").carousel('cycle');
    });
    $("#mycarousel3").carousel({ interval: 2000 });
    $("#carousel-pause").click(function () {
        $("#mycarousel3").carousel('pause');
    });
    $("#carousel-play").click(function () {
        $("#mycarousel3").carousel('cycle');
    });
});
