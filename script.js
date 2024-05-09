const form = document.querySelector("form");

const regisbtn = docoument.querySelector("button");

function validateEmail(){
    const email = document.getElementsByid('Email');
    var checkemail = email.value;
    if(checkemail.includes("@")){
        alert("Email is valid");

    }
    else{
        alert("Emial is not valid must contain '@'.");
    }
}

function showToastmessage(){
    var toastmessage = document.getElementById("toastMessage");
    toastmessage.className = "show";
}


form.addEventListener('submit', function(event){
    event.preventDefault();
    var username = document.getElementsByClassName('name').value;
    console.log(name);
    var email = document.getElementById('email').value;
    console.log(email)
})

regisbtn.addEventListener('click',showToastmessage,validateEmail);