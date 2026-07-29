const button = document.getElementById("btn");
    const title = document.getElementById("title");

button.addEventListener("click", function() {
title.textContent = "Firefly!";
alert("ABLAZE!");
});


function checkPassword(event) {
  event.preventDefault();

  let password = document.getElementById("pass").value;

  if (password === "ABLAZE" || "Ablaze") {
    window.location.href = "fire.html";
  } else {
    alert('Hint: button on home');
  }
}
