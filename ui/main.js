console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

var img = document.getElementById('cage');
var marginRight = 0;
function moveRight () {
    marginRight = marginRight + 5;
    img.style.marginLeft = marginRight + 'px';
    }

img.onclick = function() {
    var interval = setInterval(moveRight,50);
};