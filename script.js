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

function TellSet(Tel){
  document.getElementById("Set").innerText = `${Tel}, you clicked me`
}



function changeVid(){
  document.getElementById("Trailer").setAttribute("src", "Trailer2.mp4");
}
