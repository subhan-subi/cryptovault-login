
function Loginpage() {
    event.preventDefault();
    document.getElementById('xyz').style.display = "none";
    document.getElementById('xyz1').style.display = "block";

}
function signup() {
    event.preventDefault();
    document.getElementById('xyz').style.display = "block";
    document.getElementById('xyz1').style.display = "none";
}
document.getElementById('ide').addEventListener("click", () => {
    event.preventDefault();
    signup();
});
document.getElementById('ide1').addEventListener("click", () => {
    event.preventDefault();
    Loginpage()
});
function validation() {
    let user = document.getElementById('name').value.trim();
    let email = document.getElementById('em2').value.trim();
    let password = document.getElementById('pass1').value.trim();
    let password2 = document.getElementById('pass3').value.trim();
    const pasp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const up = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
    const emailp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let text = "";
    let color = "";
    if (user == "" || email == "" || password == "" || password2 == "") {
        text = "All field must be requaird";
        color = "red";
        document.getElementById("vali").innerText = text;
        document.getElementById("vali").style.color = "red";
    }
    else if (!up.test(user)) {
        text = "Username must start with a letter and be 3–20 chars";
        color = "red";
        document.getElementById("vali").innerText = text;
        document.getElementById("vali").style.color = "red";

    }
    else if (!emailp.test(email)) {
        text = "Invalid email format";
        color = "red";
        document.getElementById("vali").innerText = text;
        document.getElementById("vali").style.color = "red";
    }
    else if (!pasp.test(password)) {
        text = "Password must be 8+ chars, include upper, lower, number & special char";
        color = "red";
        document.getElementById("vali").innerText = text;
        document.getElementById("vali").style.color = "red";
    }

    else if (password !== password2) {
        text = "password do not match";
        color = "red";
        document.getElementById("vali").innerText = text;
        document.getElementById("vali").style.color = "red";
    }


    else {
        let userdata = {
            username: user,
            email: email,
            password: password
        };
        localStorage.setItem("user", JSON.stringify(userdata));
        let checkbox = document.getElementById("terms");
        if (checkbox.checked) {
            text = "sign up successful";
            color = "green";
        }
        else {
            text = "please ensure to agree with terms";
            color = "red";
        }



        document.getElementById("vali").innerText = text;
        document.getElementById("vali").style.color = color;


    }
    document.getElementById('name').value = "";
    document.getElementById('em2').value = "";
    document.getElementById('pass1').value = "";
    document.getElementById('pass3').value = "";


}

function loginvali() {
    event.preventDefault();
    let email = document.getElementById('em').value.trim();
    let pass = document.getElementById('pass').value.trim();
    let data = localStorage.getItem("user");
    let stdata = JSON.parse(localStorage.getItem("user"));

    if (email == "" || pass == "") {
        text = "All field must be requaird";
        color = "red";
        document.getElementById("lvali").innerText = text;
        document.getElementById("lvali").style.color = "red";
    }
    else if (email !== stdata.email && pass !== stdata.password) {

        text = "not acount found";
        color = "red";

        document.getElementById('lvali').innerText = text;
        document.getElementById('lvali').style.color = color;

    }
    else if (pass.length < 8) {
        text = "password must be 8 charcters";
        color = "red";

        document.getElementById('lvali').innerText = text;
        document.getElementById('lvali').style.color = color;
    }



    else {
        let checkbox = document.getElementById("t3");
        if (email === stdata.email && pass === stdata.password || checkbox.checked) {


            text = "Login succefilly";
            color = "green";
            document.getElementById('lvali').innerText = text;
            document.getElementById('lvali').style.color = color;
        }
        else {
            text = "invalid details";
            color = "red";
            document.getElementById('lvali').innerText = text;
            document.getElementById('lvali').style.color = color;
        }

    }
}
document.body.classList.toggle('new');
