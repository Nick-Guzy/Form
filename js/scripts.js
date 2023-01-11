
function setMadLibValues() {
  document.querySelector("span#person1a").innerText = document.getElementById("person1Input").value;
  document.querySelector("span#person1b").innerText = document.getElementById("person1Input").value;
  document.querySelector("span#person1c").innerText = document.getElementById("person1Input").value;
  document.querySelector("span#person2a").innerText = document.getElementById("person2Input").value;
  document.querySelector("span#person2b").innerText = document.getElementById("person2Input").value;
  document.querySelector("span#animal").innerText = document.getElementById("animalInput").value;
  document.querySelector("span#verb").innerText = document.getElementById("verbInput").value;
  document.querySelector("span#noun").innerText = document.getElementById("nounInput").value;
  document.querySelector("span#exclamation").innerText = document.getElementById("exclamationInput").value;
  document.querySelector("div#story").removeAttribute("class");
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    console.log("Submit form successfully reached.");
    setMadLibValues();
    event.preventDefault();
  };
}

window.onload = function() {
  console.log('script executing!');
  setFormSubmissionEventHandler();
};