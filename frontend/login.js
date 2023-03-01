const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('#login-form');


const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/",
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        userName: username.value,
        password: password.value
    };
    console.log(data)
    axiosInstance.post("/user/login", data)
        .then(data => console.log(data))
        .catch(e => console.log(e))

})

