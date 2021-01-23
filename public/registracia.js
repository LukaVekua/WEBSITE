var Skala = document.getElementById("seri_mandzili");
Skala.style.width = "300px";
Skala.style.height = "20px";
Skala.style.border = "1px solid black";
Skala.style.backgroundColor = "#a5856c";
Skala.style.position = "relative";
Skala.style.top = "30px";

var Nishnuli = document.getElementById("nishnuli");
Nishnuli.style.width = "10px";
Nishnuli.style.height = "35px";
Nishnuli.style.border = "1px solid black";
Nishnuli.style.backgroundColor = "#3ea4b1";
Nishnuli.style.position = "relative";



const button = document.querySelector('.knopka');
const nishnuli = document.querySelector('#nishnuli');

button.addEventListener('click', () => {
  nishnuli.style.marginLeft="300px";
  nishnuli.style.transition="5s";
  nishnuli.style.position = "absolute";
  setTimeout(function() {
    alert("Congrats your registration is done successfully")
  },5000);
})