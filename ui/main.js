console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = '';

var img = document.getElementById('cage');
var marginLeft = 0;
function moveLeft () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
    }

img.onclick = function() {
    var interval = setInterval(moveLeft,50);
};