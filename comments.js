// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'data/comments.json');
const comments = require(commentsPath);

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile(commentsPath, JSON.stringify(comments, null, 2), function(err) {
    if (err) {
      res.status(500).send('Server error');
    } else {
      res.json(comments);
    }
  });
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
```

##