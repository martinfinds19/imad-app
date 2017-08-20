var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Pages = {
    'Page-1':{
     title: 'NOVEL',
     heading: 'Laws of sword and flush',
     date: 'August 16,2017',
     content: `
               
           <p>
               This is the story of blood revenge case religion but a will be an inspiration
               for everyone.
           </p>
           <p>
               The story has fantasy elemnets and many characters with many
               kingdoms known as Tashy also which is a kingdom of snakes.
           </p>
           <p>
               The book contains eight parts it will be heavy book after completion
               I think.
           </p>`    
          
},
    'Page-2':{
      title: 'servers',
      heading: 'traffic',
      date: 'Auggust 20,2017',
      content: `
            <p
            >this is world
            </p>`
            
       },
    'Page-3':{
             title: 'Martin',
             heading: 'Mystery',
             date: 'August 29,2017',
             content: `
                <p>This is martin msytery agent 
                    of "The cente" which is mystery 
                     organization</p>`
         }
}; 
function createTemplate (data) {

var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
    
var htmlTemplate = `
           
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width-device-width, initial-scale-1" />
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
<body>
    <div class="container">
        

<h1 style= "color:blue;">${heading}</h1>    
    
       <div>
          <a href="/">Home</a> 
    
       </div>
       <div>
           <hr/>
       </div>
       <div>
          ${date}
       </div>
       <div>
           ${content}
       </div>
     </div>  
       </body>
     </html>`  
       ;
       return htmlTemplate;
}       
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter = 0;
app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});
app.get('/:PageNumber', function(req,res) {
  // PageNumber == Page-1
  // pages[PageNumber] == content object for Page-1
  
    var PageNumber = req.params.PageNumber;    
     res.send(createTemplate(Pages[PageNumber]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js',   function (req,res){  
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));    
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/:name', function(req,res){
    
    var name = req.params.name;
    names.push(name);
    //JSON = javascript object notation
    res.send(JSON.stringify(names));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
