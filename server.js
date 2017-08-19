var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));




var PageOne = {
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
        

<h1 style= "color:blue;">Laws of sword and flush</h1>    
    
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

app.get('/Page-1', function(req,res) {
     res.send(createTemplate(PageOne));
});


app.get('/Page-2', function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'Page-2.html')); 
});


app.get('/Page-3', function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'Page-3.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
