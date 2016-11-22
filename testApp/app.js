var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request')

var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GitHub hits this endpoint when there is pull request activity on the 
// joeldudley/test repo.
router.post('/', function(req, res) {
    gitAlert = req.body;
    if (gitAlert.action == 'opened') {
        console.log('Pull request opened - title is: ' + gitAlert.pull_request.title);
    }
    
    res.end();
})

// Returns the open pull requests for the joeldudley/test GitHub repo.
router.get('/', function(_, res) {
    var options = {
        url: 'https://api.github.com/repos/joeldudley/test/pulls?state=open',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function (_, _, body) {
        res.send(body);
    });
})

// The API can also be used to close a pull request, using the following 
// endpoint:
//     PATCH https://api.github.com/repos/joeldudley/test/pulls/:number

app.use(router);

module.exports = app;