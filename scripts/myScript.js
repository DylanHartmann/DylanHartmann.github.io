console.log(window.location.href);

const path = window.location.href;
const information_file = "ShorseInformation";
var file_name = "WhereShorse";

var files = ["Home", "WhereShorse", "WhatShorse", "test"];

// get file information
function setInformation(location) {
    var goto_path = path+information_file+"/"+location+".md"
    var element = document.getElementById("zero-md-element");
    element.src = information_file+"/"+location+".md"
    /*
    fetch(goto_path)
        .then(response => response.text())
        .then(data => {
            var element = document.getElementById("zero-md-element");
            element.src = location=".md"
            document.getElementById('output').textContent = data;
        })
        .catch(error => console.error('Error fetching text file: ', error));*/
};

// Setup all buttons onto page
for (var i = 0; i<files.length; i++) {
    // Get that specific file name
    var temp = files[i];

    // Create the button
    const button = document.createElement('button');
    button.innerText = temp;

    // Add button event listeners
    button.addEventListener('click', () => {
        var name = button.innerText;
        console.log(name);
        setInformation(name);
    })

    // do a bunch of adding
    var li = document.createElement("li");
    li.appendChild(button)
    li.setAttribute("id", "md_button");
    document.getElementById("Out-Nav").appendChild(li);
}