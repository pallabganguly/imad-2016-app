var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'personal': {
        title : 'Pallab | Personal Information',
        heading : 'Personal Information',
        date: 'October 3rd, 2016',
        content:  `<p>
                    My name is Pallab Ganguly. I was born on 13th April, 1996. I live in Barrackpore, and I'm a third year student of CSE with the Kalyani Government Engineering College.
                    </p>`
    },
    'education': {
        title : 'Pallab | Education',
        heading : 'My educational qualifications',
        date: 'October 4th, 2016',
        content:  `<p>
                    I passed ICSE for class tenth from Modern English Academy, a reputed english-medium school in Barrackpore in the year 2012, and secured 96% marks.
                    I passed ISC for class twelfth from Modern English Academy in the year 2014,a nd secured 94.5% marks.
                    In the same year, I appeared for WBJEE, securing rank 2286, and was admitted into Kalyani Government Engineering College in the CSE department, where I am currently pursuing my B.Tech course.
                    I am interested in Web-Development, particularly in back-end and deployment of web apps.
                    </p>`
    },
    'contact' : {
         title : 'Pallab | Contact',
        heading : 'Contact',
        date: 'October 5th, 2016',
        content:  `<p>
                   You can contact me at some-email@example.com, or call at +12123456
                    </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var templateOne=
    `<html>
         <head>
             <link href="/ui/style.css" rel="stylesheet" />
                <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body>
        <div class="container">
            <div><small>${date}</small></div>
            <div>
                <h4>${heading}</h4>
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return templateOne;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter += 1
    res.send(counter.toString())
})

app.get('/:articleName', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'personal.html'));
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
