console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

var img = document.getElementById('cage');
var marginright = 0;
function moveRight () {
    marginright = marginright + 5;
    img.style.marginright = marginright + 'px';
    }

img.onclick = function() {
    var interval = setInterval(moveRight,50);
};