document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is running!');

});


var button1click = false;
var button2click = false; 
var button3click = false;

var activeButton = null;

function setActiveButton(buttonId) {
    activeButton = buttonId;
}

function toggleButtonHeight(buttonId) {
    moveCircle(buttonId);

    if(activeButton){
        if(activeButton!=buttonId){
            moveCircle(activeButton);
            
        }
    }
    activeButton = buttonId;
    if (buttonId === 'Button1') {
        button1click = !button1click;
        button2click = false;
        button3click = false;
    } else if (buttonId === 'Button2') {
        button2click = !button2click;
        button1click = false;
        button3click = false;
    } else if (buttonId === 'Button3') {
        button3click = !button3click;
        button1click = false;
        button2click = false;
    }

    if (button1click) {
        document.getElementById('Button1').style.height = "174.11px";
    } else {
        document.getElementById('Button1').style.height = "74.11px";
    }

    if (button2click) {
        document.getElementById('Button2').style.height = "174.11px";
    } else {
        document.getElementById('Button2').style.height = "74.11px";
    }

    if (button3click) {
        document.getElementById('Button3').style.height = "174.11px";
    } else {
        document.getElementById('Button3').style.height = "74.11px";
    }
    
}

function moveCircle(buttonId) {
    var circle = document.getElementById(buttonId + 'Circle');

    // Toggle the 'up' class to control the circle's position
    circle.classList.toggle('up');
}