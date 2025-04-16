function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    axios.post('/project1/controllers/login.php', {
        uname: username,
        pword: password
    }).then( (response) => {
        console.log(response.data);
        if (response.data == "valid") {
            //pupunta sa home page
            window.location.href = "/project1/view/dashboard.html";
        } else {
            alert("Invalid user account!!");
        }
    }).catch( (error) => {
        alert("Error encountered while validating your account!");
    });
}