
var loginStatus = document.getElementById('user-login');
loginStatus.addEventListener("submit", loginUser);

event.preventDefault();

function loginUser() {
    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    if (email=="dvarava@email.com" && password=="password12345")  {   
        localStorage.setItem('loggedIn',1);    
        window.location.href = "shop.html";
    }
    else {
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
    }
    event.preventDefault();
}

