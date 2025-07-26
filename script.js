
const bilangTite = document.getElementById("bilangTite");
const clickMe = document.getElementById("clickMe");
const loadButton = document.getElementById("loadButton");
const deleteButton = document.getElementById("delButton");
//initialize data with daved points or default
let data = JSON.parse(localStorage.getItem("userPoints")) || {
  points: 0,
};
bilangTite.innerHTML = data.points;
function mainFunction() {
  clickMe.addEventListener("click", function () {
    data.points++;
    localStorage.setItem("userPoints", JSON.stringify(data));
    bilangTite.innerHTML = data.points;
  });
}
function load() {
  loadButton.addEventListener("click", function () {
    data = JSON.parse(localStorage.getItem("userPoints"));
    bilangTite.innerHTML = data.points;
  });
}
function deleteF() {
  deleteButton.addEventListener("click", function () {
    data.points = 0;
    localStorage.setItem('userPoints', JSON.stringify(data));
    data = JSON.parse(localStorage.getItem('userData'));
    bilangTite.innerHTML = data.points;
    location.reload();
  });
}
deleteF();
load();
mainFunction();
