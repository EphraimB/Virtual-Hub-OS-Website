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
setupProgressStepOneHolder.setAttribute("class", "OOBEStepOne");

var setupProgressStepTwoHolder = document.createElement("div");

var setupProgressStepTwo = document.createTextNode("2");
setupProgressStepTwoHolder.appendChild(setupProgressStepTwo);
Hub.appendChild(setupProgressStepTwoHolder);
setupProgressStepTwoHolder.setAttribute("class", "OOBEStepTwo");

var nextButtonTextHolder = document.createElement("div");

var nextButtonText = document.createTextNode("Next");
nextButtonTextHolder.appendChild(nextButtonText);
Hub.appendChild(nextButtonTextHolder);
nextButtonTextHolder.setAttribute("class", "OOBENextButton");

var signUpTextHolder = document.createElement("p");

var signUpText = document.createTextNode("Sign Up form");
signUpTextHolder.appendChild(signUpText);
Hub.appendChild(signUpTextHolder);
signUpTextHolder.setAttribute("class", "OOBEHeader");

var firstNameTextHolder = document.createElement("p");

var firstNameText = document.createTextNode("First Name:");
firstNameTextHolder.appendChild(firstNameText);
Hub.appendChild(firstNameTextHolder);
firstNameTextHolder.setAttribute("class", "OOBEFirstNameLabel");

var firstNameInput = document.createElement("input");

Hub.appendChild(firstNameInput);
firstNameInput.setAttribute("type", "text");
firstNameInput.setAttribute("class", "OOBEFirstNameInput");

var lastNameTextHolder = document.createElement("p");

var lastNameText = document.createTextNode("Last Name:");
lastNameTextHolder.appendChild(lastNameText);
Hub.appendChild(lastNameTextHolder);
lastNameTextHolder.setAttribute("class", "OOBELastNameLabel");

var lastNameInput = document.createElement("input");

Hub.appendChild(lastNameInput);
lastNameInput.setAttribute("type", "text");
lastNameInput.setAttribute("class", "OOBELastNameInput");

var ageTextHolder = document.createElement("p");

var ageText = document.createTextNode("Age:");
ageTextHolder.appendChild(ageText);
Hub.appendChild(ageTextHolder);
ageTextHolder.setAttribute("class", "OOBEAgeLabel");

var ageInput = document.createElement("input");

Hub.appendChild(ageInput);
ageInput.setAttribute("type", "number");
ageInput.setAttribute("min", "0");
ageInput.setAttribute("class", "OOBEAgeInput");

nextButtonTextHolder.onclick = function setupPageTwo()
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
