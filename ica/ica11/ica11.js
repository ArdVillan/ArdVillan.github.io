// JavaScript code to handle the custom function

function displayMessage(msgText, msgType) {
  const body = document.body;

  // Create message box panel
  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  // Create message paragraph
  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  // Create close button
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  // Close button event listener
  closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));

  // Additional handling based on message type
  if (msgType === "warning") {
    msg.style.backgroundImage = "url(icons/warning.png)";
    panel.style.backgroundColor = "pink";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(icons/chat.png)";
    panel.style.backgroundColor = "aqua";
  }
}

// Event listener for button click to trigger displayMessage function
const actionButton = document.getElementById("actionButton");
actionButton.addEventListener("click", () => {
  displayMessage("Another day, another slay.", "chat");
  displayMessage("Slay the day away, Queen!", "warning");

});

