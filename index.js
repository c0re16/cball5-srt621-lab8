// var http = require('http');
// var router = require('./router');
// http.createServer(router.handleRequest).listen(3000);
var express = require('express');
const app = express();
const port = 3000;
app.use(express.static('serve_html'));

app.use(express.static('serve_html/css'));
app.use(express.static('serve_html/images'));
app.use(express.static('serve_html/js'));
app.use(function(req,res) {
	res.status(404);
	res.sendfile('notfound.html');
});
app.get('/',(req,res) => {
	res.send('hello world');
});
app.listen(port, () => console.log('listening on port 3000'));
