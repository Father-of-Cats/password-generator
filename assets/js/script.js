
var password=document.getElementById("fill");

// generator functions
 function genPassword() {
    // available Characters, PW length and PW placeholder
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    //loop to reach length
 for (var i = 0; i <= passwordLength; i++) {
    //Math functions to pull from char set
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("fill").value = password;
 }

function copyPassword() {
  var copyText = document.getElementById("fill");
  copyText.select();
  document.execCommand("copy");  
}