const inputPassword1 = document.querySelector("#inputPassword1");
const inputPassword2 = document.querySelector("#inputPassword2");
const btnValidate = document.querySelector("#btnValidate");

function funcCheckMatch() {
  if (inputPassword1.value === inputPassword2.value) {
    document.getElementById("output").innerHTML =
      "<img src='phil-hartman-ed-mc-mahon-snl.gif' width='350px' height='300px' />";
  } else {
    document.getElementById("output").innerHTML =
      "<img src='giphy.gif' width='350px' height='300px' />";
  }
}

btnValidate.addEventListener("click", funcCheckMatch);
