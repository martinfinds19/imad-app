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
   
 var nameInput = document.getElementById('name');
 var nam = nameInput.value;
 var submit = document.getElementById('submit_btn');
  
 submit.onclick = function() {
       
       
       var names = ['name1', 'name2',  'name3'];
       var list = '';
       for(var i=0; i< names.length; i++) {
          list = '<li>' + names[i] + '</li>';          
       }
       var ul = document.getElementById('namelist');
       ul.innerHTML = list;
 };      
 
 
 
 
 
 