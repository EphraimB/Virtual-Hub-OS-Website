// This is a demo of my OS running inside the CSS based Hub
var StartOS = document.getElementById("Start-OS");
var Hub = document.getElementById("Hub");

StartOS.onclick = function VirtualHubOS()
{
StartOS.style.visibility = "hidden";

// Setup Screen
var Text = document.createElement("p");
var Input = document.createElement("input");

var text = document.createTextNode("Pick a Wallpaper image:");

Text.appendChild(text);
Hub.appendChild(Text);
Text.style.position = "relative";
Text.style.left = "700px";
Text.style.top = "325px";

Hub.appendChild(Input);
Input.setAttribute("type", "file");
Input.style.position = "relative";
Input.style.left = "675px";
Input.style.top = "350px";
};
