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

var setupProgressStepThreeHolder = document.createElement("div");

var setupProgressStepThree = document.createTextNode("3");
setupProgressStepThreeHolder.appendChild(setupProgressStepThree);
Hub.appendChild(setupProgressStepThreeHolder);
setupProgressStepThreeHolder.setAttribute("class", "OOBEStepThree");

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
nextButtonTextHolder.style.display = "none";
setupProgressStepOneHolder.style.fontWeight = "normal";
setupProgressStepTwoHolder.style.fontWeight = "bold";

var userPhotoTextHolder = document.createElement("p");

var userPhotoText = document.createTextNode("Upload a photo of yourself:");
userPhotoTextHolder.appendChild(userPhotoText);
Hub.appendChild(userPhotoTextHolder);
userPhotoTextHolder.setAttribute("class", "OOBEUserPhotoText");

var userPhotoInput = document.createElement("input");

Hub.appendChild(userPhotoInput);
userPhotoInput.setAttribute("type", "file");
userPhotoInput.setAttribute("class", "OOBEUserPhotoInput");

var nextButtonTwoTextHolder = document.createElement("div");

var nextButtonTwoText = document.createTextNode("Next");
nextButtonTwoTextHolder.appendChild(nextButtonTwoText);
Hub.appendChild(nextButtonTwoTextHolder);
nextButtonTwoTextHolder.setAttribute("class", "OOBENextButtonTwo");

nextButtonTwoTextHolder.onclick = function setupPageThree()
{
userPhotoTextHolder.style.display = "none";
userPhotoInput.style.display = "none";
nextButtonTwoTextHolder.style.display = "none";
setupProgressStepTwoHolder.style.fontWeight = "normal";
setupProgressStepThreeHolder.style.fontWeight = "bold";

var backgroundColorTextHolder = document.createElement("p");

var backgroundColorText = document.createTextNode("Choose background color:");
backgroundColorTextHolder.appendChild(backgroundColorText);
Hub.appendChild(backgroundColorTextHolder);
backgroundColorTextHolder.setAttribute("class", "OOBEBackgroundColorText");

var backgroundColorInput = document.createElement("input");

Hub.appendChild(backgroundColorInput);
backgroundColorInput.setAttribute("type", "color");
backgroundColorInput.setAttribute("class", "OOBEBackgroundColorInput");

var nextButtonThreeTextHolder = document.createElement("div");

var nextButtonThreeText = document.createTextNode("Next");
nextButtonThreeTextHolder.appendChild(nextButtonThreeText);
Hub.appendChild(nextButtonThreeTextHolder);
nextButtonThreeTextHolder.setAttribute("class", "OOBENextButtonThree");

nextButtonThreeTextHolder.onclick = function setupResults()
{
backgroundColorTextHolder.style.display = "none";
backgroundColorInput.style.display = "none";
nextButtonThreeTextHolder.style.display = "none";
signUpTextHolder.style.display = "none";
setupProgressStepThreeHolder.style.fontWeight = "normal";
setupProgressStepOneHolder.style.display = "none";
setupProgressStepTwoHolder.style.display = "none";
setupProgressStepThreeHolder.style.display = "none";

var resultsTextHolder = document.createElement("p");

Hub.appendChild(resultsTextHolder);
resultsTextHolder.innerHTML = "Hi, " + firstNameInput.value + " " + lastNameInput.value;
resultsTextHolder.setAttribute("class", "OOBESetupResults");

Hub.style.backgroundColor = backgroundColorInput.value;
};

};

};

};
