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

    setPrice(buttonId);
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
    var dot = document.getElementById(buttonId + 'Dot');
    

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

function setPrice(buttonId){
    var priceTag = document.getElementById('total');
    if (map.get(buttonId) === 'closed') {
        switch (buttonId) {
            case 'Button1':
                priceTag.textContent = 'Total : $10.00 USD';
                break;
            case 'Button2':
                // Add logic for Button2 if needed
                priceTag.textContent = 'Total : $18.00 USD';
                break;
            case 'Button3':
                priceTag.textContent = 'Total : $24.00 USD';
                break;
            default:
                priceTag.textContent = 'Total : $0.00 USD';
        }
        
    } else {
        priceTag.textContent = 'Total : $0.00 USD';
        
    }
}