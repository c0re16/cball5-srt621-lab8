var url = require('url');
var fs = require('fs');
function renderHTML(path,res) {
	fs.readFile(path,null,function(error,data) {
		if (error) {
			res.writeHead(404);
			res.write('File Not Found');
		} else {
			res.write(data);
		}
		res.end();
	});
}
// function sendPic(path,res) {
// 	fs.readFile(res,path,'image/png', responseCode=200) {
// 		if (err) {
// 			res.writeHead(500, {Content-Type:'text/plain'})
// 			res.end(data)
// 		}
// 	}
// }
module.exports = {
	handleRequest: function(req,res) {
		res.writeHead(200, {'Content-Type': 'text/html'});

		var path = url.parse(req.url).pathname;
		switch(path) {
			case '/':
				renderHTML('./serve_html/',res);
				break;
			default:
				res.writeHead(404);
				res.write('Route Not Defined');
				res.end();

		}
	}
};