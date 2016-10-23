var express = require('express');
var morgan = require('morgan');//output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
  title:'Article-one',
  heading:'Article one',
  date:'Oct6 2016',
  content:` <p>
            something abour the article.something abour the article.something abour the article.<br/>
            something abour the article.something abour the article.something abour the article.
        </p>`
},
 'article-two':{
  title:'Article-two',
  heading:'Article two',
  date:'Oct7 2016',
  content:` <p>
            something abour the article.something abour the article.something abour the article.<br/>
            something abour the article.something abour the article.something abour the article.
        </p>`
},
'article-three':{
  title:'Article-three',
  heading:'Article three',
  date:'Oct8 2016',
  content:` <p>
            something abour the article.something abour the article.something abour the article.<br/>
            something abour the article.something abour the article.something abour the article.
        </p>`
}
}
function createTemplate(data){
 var title=data.title;
 var heading=data.heading;
 var date=data.heading;
 var content=data.content;
var htmlTemplate=`
<html>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
   <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div>
        <a href="/">home</a>
    </div>
    <hr/>
    <h2>
       ${heading}
    </h2>
    <div>
        ${date}
    </div>
    <hr/>
    <div>
       ${content}
    </div>
    </div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});
app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
