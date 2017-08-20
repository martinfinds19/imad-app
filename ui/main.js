console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

var img = document.getElementById('cage');
var Left = 0;
function moveRight()
    {
   Left = Left + 10;
    img.style.marginRight = Left + 'px';
    }

img.onclick = function() {
    var interval = setInterval(moveRight,50);
};