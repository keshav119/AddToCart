document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is running!');
    states();

});

var map = new Map();

function states(){
    map.set('Button1', 'closed');
    map.set('Button2', 'closed');
    map.set('Button3', 'closed');
}
    
function toggleButtonHeight(buttonId) {


    moveCircle(buttonId);

    for (let [key, value] of map){
        if(key!=buttonId){
            if(value==='open'){
                moveCircle(key);
            }
        }
    }
    

}
function moveCircle(buttonId) {
    var circle = document.getElementById(buttonId + 'Circle');
    var dot = document.getElementById(buttonId + 'Dot'); // Corrected variable name

    // Toggle the 'up' class to control the circle's position
    circle.classList.toggle('up');
    dot.classList.toggle('visible');

    if (map.get(buttonId) === 'closed') {
        map.set(buttonId, 'open');
        document.getElementById(buttonId).style.height = '174.11px';
    } else {
        map.set(buttonId, 'closed');
        document.getElementById(buttonId).style.height = '74.11px';
    }
}