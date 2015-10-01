// This is a demo of my OS running inside the CSS based Hub
var StartOS = document.getElementById("Start-OS");
var Hub = document.getElementById("Hub");

StartOS.onclick = function VirtualHubOS()
{
StartOS.style.visibility = "hidden";

// Setup Screen
var Text = document.createElement("p");
var Input = document.createElement("input");



Hub.appendChild(Input);
Input.setAttribute("type", "file");
Input.style.position = "relative";
Input.style.left = "675px";
Input.style.top = "350px";
};
