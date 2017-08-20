//Conter code

var button = document.getElementById('counter');
   
   //Create Request
button.onclick = function() {

  var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
         if(request.readyState === XMLHttpRequest.DONE) {
            
            if(request.status == 200){
                var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }     
         }     
    };
                     
    //Make request
    request.open('GET', 'http://martinfinds19.imad.hasura-app.io/counter', true);
    request.send(null);
    

};


