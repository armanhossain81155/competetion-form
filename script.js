const checkButton = document.querySelector("#check-button");
const status = document.querySelector("#status");

checkButton.addEventListener("click", () => {
  status.textContent = "JavaScript is connected.";
});
