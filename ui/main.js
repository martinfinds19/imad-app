console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

var img = document.getElementById('cage');
var marginBottom = 0;
function moveRight () {
    marginBottom = marginBottom + 5;
    img.style.marginBottom = marginBottom + 'px';
    }

img.onclick = function() {
    var interval = setInterval(moveRight,50);
};