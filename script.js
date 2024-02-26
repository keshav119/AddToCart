document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is running!');
});

var button1click = false;
var button2click = true; 
var button3click = false;

function toggleButtonHeight(buttonId) {
    var button = document.getElementById(buttonId);

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
        document.getElementById('Button1').style.height = "150px";
    } else {
        document.getElementById('Button1').style.height = "74.11px";
    }

    if (button2click) {
        document.getElementById('Button2').style.height = "150px";
    } else {
        document.getElementById('Button2').style.height = "74.11px";
    }

    if (button3click) {
        document.getElementById('Button3').style.height = "150px";
    } else {
        document.getElementById('Button3').style.height = "74.11px";
    }
}
