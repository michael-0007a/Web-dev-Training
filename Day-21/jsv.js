function valid(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var rpass = document.getElementById("rpassword").value;

    // Clear previous errors
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    var isValid = true;

    if(user.length < 6 || user.length > 15){
        document.getElementById("usernameError").innerText = "Please enter username between 6 to 15 chars only.";
        isValid = false;
    }

    if(pass !== rpass){
        document.getElementById("passwordError").innerText = "Password and confirm password should be same.";
        isValid = false;
    }

    return isValid; // Prevent form submission if invalid
}