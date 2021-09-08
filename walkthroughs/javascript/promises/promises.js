let form = document.querySelector("form");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let feedback = document.querySelector("#feedback");

form.onsubmit = (event) => {
  event.preventDefault();

  let userEmail = email.value;
  let userPass = pass.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userEmail == "bbryant@truecoders.io" && userPass == "password") {
        resolve({
          msg: "Successful Sign In",
          user: userEmail,
        });
      } else {
        reject(new Error("Invalid Credentials"));
      }
    }, 1000);
  })
    .then((res) => {
      flashAlert(res.msg);
      return res;
    })
    .then((res) => {
      document.querySelector("main").classList.remove("d-none");
      form.classList.add("d-none");

      document.querySelector(
        "main > h2"
      ).textContent = `Welcome back, ${res.user}!`;
    })
    .catch((err) => {
      console.error(err.message);
      flashAlert(err.message, true);
    });
};

function flashAlert(msg, error = false) {
  feedback.classList.remove("d-none", "greenAlert", "redAlert");
  feedback.classList.add(error ? "redAlert" : "greenAlert");
  feedback.textContent = msg;
  setTimeout(() => {
    feedback.classList.add("d-none");
  }, 5000);
}
