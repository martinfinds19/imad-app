console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

var img = document.getElementById('cage');
var marginRight = 0;
function moveLeft () {
    marginRight = marginRight + 5;
    img.style.marginRight = marginRight + 'px';
    }

img.onclick = function() {
    var interval = setInterval(moveLeft,50);
};