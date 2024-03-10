console.log("Estoy Conectado al script");

document.querySelector("#btn_to_change").addEventListener("click", handleChangeStyleBtn);
document
  .querySelectorAll("input")
  .forEach((element) => element.addEventListener("input", handleGetCategories));
document.getElementById("form").addEventListener("submit", handleSubmitCategories);
document.querySelector("#submit_password").addEventListener("click", handleValidatePassword);

let category1, category2, category3;

function handleChangeStyleBtn() {
  const element = this;

  if (element.classList.contains("btn_active")) {
    element.classList.remove("btn_active");
  } else {
    element.classList.add("btn_active");
  }
}

function handleGetCategories(event) {
  const element = event.target;

  let value = Number(element.value);

  const id = element.id;

  if (isNaN(value)) {
    event.target.value = 0;
    value = 0;
    alert("Sólo se aceptan números");
  }

  if (value <= 0 || value > 10 || !value) {
    alert("Sólo se aceptan números del 1 al 10");
  }

  switch (id) {
    case "category_1":
      category1 = value;
      break;
    case "category_2":
      category2 = value;
      break;
    case "category_3":
      category3 = value;
      break;
    default:
      break;
  }
}

function handleSubmitCategories(event) {
  event.preventDefault();
  const amount = category1 + category2 + category3;

  if (amount > 10) {
    document.getElementById("amount").innerHTML = "Llevas demasiados stickers";
  } else {
    document.getElementById("amount").innerHTML = `Llevas ${amount} stickers`;
  }
}

function handleValidatePassword() {
  const select1 = document.getElementById("select1").value;
  const select2 = document.getElementById("select2").value;
  const select3 = document.getElementById("select3").value;
  const password = select1 + select2 + select3;

  if (password === "911") {
    document.getElementById("message").innerHTML = "Password 1 correcto";
  } else if (password === "714") {
    document.getElementById("message").innerHTML = "Password 2 correcto";
  } else {
    document.getElementById("message").innerHTML = "Password incorrecto";
  }
}
