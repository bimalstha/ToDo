const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('#login-form');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        userName: username.value,
        password: password.value
    };
    console.log(data)
    axios.post("http://localhost:3336/user/add", data)
        .then(data => console.log(data))
        .error(data => console.log(data))

})

