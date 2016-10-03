var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var personalpage={
  title : 'Pallab | Personal Information',
  heading : 'Personal Information',
  date: 'October 3rd, 2016',
  content:  `<p>
                My name is Pallab Ganguly. I was born on 13th April, 1996. I live in Barrackpore, and I'm a third year student of CSE with the Kalyani Government Engineering College.
            </p>`
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function createTepmlate(data){
    var title=data.title;
    var date=data.date;
    var heading=heading;
    var content=title.content
    var templateOne=
    `<html>
         <head>
             <link href="/ui/style.css" rel="stylesheet" />
                <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body>
        <div class="container">
            <div>${date}</div>
            <div>
                <h5>${heading}</h5>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return templateOne;
}

app.get('/personal', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'personal.html'));
  res.send(createTemplate(personalpage))
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
