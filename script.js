const bilangTite = document.getElementById("bilangTite");
const clickMe = document.getElementById("clickMe");
const loadButton = document.getElementById("loadButton");
const deleteButton = document.getElementById("delButton");
const delDomain = document.getElementById("delDomain");
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
    delDomain.innerHTML = `<div id="verificationDeletion">
            <h3>are you sure to delete your progress?</h3>
            <button class="delB" id="delYes">Yes</button>
            <button class="delB" id="delNo">No</button>
        </div>`;
    const delyes = document.getElementById("delYes");
    const delno = document.getElementById('delNo');
    delyes.addEventListener("click", function () {
      data.points = 0;
      localStorage.setItem("userPoints", JSON.stringify(data));
      data = JSON.parse(localStorage.getItem("userData"));
      alert("your progress has been deleted.");
      location.reload();
    });
    delno.addEventListener('click', function(){
        delDomain.innerHTML = '';
    });
  });
}
deleteF();
// load();
mainFunction();
