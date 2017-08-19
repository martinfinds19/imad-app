console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

var img = document.getElementById('cage');

img.onclick = function(){
    img.style.marginRight = '100px'
};