var http = require('http');
http.createServer(function(request,response){
	response.write("Hello, github "+ new Date());
	response.end();
}).listen(process.env.PORT || 5000)
