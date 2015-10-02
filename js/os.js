// This is a demo of my OS running inside the CSS based Hub
var StartOS = document.getElementById("Start-OS");
var Hub = document.getElementById("Hub");

StartOS.onclick = function VirtualHubOS()
{
StartOS.style.display = "none";

// Setup OOBE

// Sign up to a Virtual account
var setupProgressStepOneHolder = document.createElement("div");

var setupProgressStepOne = document.createTextNode("1");
setupProgressStepOneHolder.appendChild(setupProgressStepOne);
Hub.appendChild(setupProgressStepOneHolder);
setupProgressStepOneHolder.style.position = "relative";
setupProgressStepOneHolder.style.left = "475px";
setupProgressStepOneHolder.style.top = "625px";
setupProgressStepOneHolder.style.fontSize = "20px";
setupProgressStepOneHolder.style.color = "green";
setupProgressStepOneHolder.style.fontWeight = "bold";

var setupProgressStepTwoHolder = document.createElement("div");

var setupProgressStepTwo = document.createTextNode("2");
setupProgressStepTwoHolder.appendChild(setupProgressStepTwo);
Hub.appendChild(setupProgressStepTwoHolder);
setupProgressStepTwoHolder.style.position = "relative";
setupProgressStepTwoHolder.style.left = "500px";
setupProgressStepTwoHolder.style.top = "602px";
setupProgressStepTwoHolder.style.fontSize = "20px";
setupProgressStepTwoHolder.style.color = "green";

var nextButtonTextHolder = document.createElement("div");

var nextButtonText = document.createTextNode("Next");
nextButtonTextHolder.appendChild(nextButtonText);
Hub.appendChild(nextButtonTextHolder);
nextButtonTextHolder.setAttribute("class", "Button");
nextButtonTextHolder.setAttribute("id", "Next");
nextButtonTextHolder.style.position = "relative";
nextButtonTextHolder.style.left = "850px";
nextButtonTextHolder.style.top = "275px";
nextButtonTextHolder.style.width = "50px";
nextButtonTextHolder.style.height = "30px";
nextButtonTextHolder.style.color = "white";
nextButtonTextHolder.style.backgroundColor = "black";
nextButtonTextHolder.style.textAlign = "center";
nextButtonTextHolder.style.paddingTop = "10px";

var signUpTextHolder = document.createElement("p");

var signUpText = document.createTextNode("Sign Up form");
signUpTextHolder.appendChild(signUpText);
Hub.appendChild(signUpTextHolder);
signUpTextHolder.style.position = "relative";
signUpTextHolder.style.left = "600px";
signUpTextHolder.style.top = "0px";
signUpTextHolder.style.fontWeight = "bold";
signUpTextHolder.style.fontSize = "24px";

var firstNameTextHolder = document.createElement("p");

var firstNameText = document.createTextNode("First Name:");
firstNameTextHolder.appendChild(firstNameText);
Hub.appendChild(firstNameTextHolder);
firstNameTextHolder.style.position = "relative";
firstNameTextHolder.style.left = "450px";
firstNameTextHolder.style.top = "100px";

var firstNameInput = document.createElement("input");

Hub.appendChild(firstNameInput);
firstNameInput.setAttribute("type", "text");
firstNameInput.style.position = "relative";
firstNameInput.style.left = "550px";
firstNameInput.style.top = "66px";

var lastNameTextHolder = document.createElement("p");

var lastNameText = document.createTextNode("Last Name:");
lastNameTextHolder.appendChild(lastNameText);
Hub.appendChild(lastNameTextHolder);
lastNameTextHolder.style.position = "relative";
lastNameTextHolder.style.left = "450px";
lastNameTextHolder.style.top = "125px";

var lastNameInput = document.createElement("input");

Hub.appendChild(lastNameInput);
lastNameInput.setAttribute("type", "text");
lastNameInput.style.position = "relative";
lastNameInput.style.left = "550px";
lastNameInput.style.top = "91px";

var ageTextHolder = document.createElement("p");

var ageText = document.createTextNode("Age:");
ageTextHolder.appendChild(ageText);
Hub.appendChild(ageTextHolder);
ageTextHolder.style.position = "relative";
ageTextHolder.style.left = "450px";
ageTextHolder.style.top = "150px";

var ageInput = document.createElement("input");

Hub.appendChild(ageInput);
ageInput.setAttribute("type", "number");
ageInput.setAttribute("min", "0");
ageInput.style.position = "relative";
ageInput.style.left = "550px";
ageInput.style.top = "116px";

var next = document.getElementById("Next");

next.onclick = function setupPageTwo()
{
firstNameTextHolder.style.display = "none";
firstNameInput.style.display = "none";
lastNameTextHolder.style.display = "none";
lastNameInput.style.display = "none";
ageTextHolder.style.display = "none";
ageInput.style.display = "none";
setupProgressStepOneHolder.style.fontWeight = "normal";
setupProgressStepTwoHolder.style.fontWeight = "bold";
};

/* Text.appendChild(text);
Hub.appendChild(Text);
Text.style.position = "relative";
Text.style.left = "700px";
Text.style.top = "325px";

Hub.appendChild(Input);
Input.setAttribute("type", "file");
Input.style.position = "relative";
Input.style.left = "675px";
Input.style.top = "350px"; */
};
