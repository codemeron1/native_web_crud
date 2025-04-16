function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    axios.post('/project1/controllers/login.php', {
        uname: username,
        pword: password
    })
}