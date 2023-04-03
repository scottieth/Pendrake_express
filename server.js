const express = require('express');
const path = require('path');
const app = express();
const port = 1337;
const publicDirPath = path.join(__dirname, 'public');

app.use('/css', express.static(path.join(publicDirPath, 'css')));
app.use('/images', express.static(path.join(publicDirPath, 'images')));
app.use('/js', express.static(path.join(publicDirPath, 'js')));

app.get('/', function(req, res) {
  res.sendFile(path.join(publicDirPath, 'home.html'));
});

app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(publicDirPath, '404.html'));
});

app.listen(port, function() {
  console.log('Server is running at http://localhost:' + port);
});
