const http = require('http')
http.RequestListener

const server = http.createServer(function(req, res) {
	console.log('req', req);
	if(req.url === '/a.js?callback=handleCb' && req.method === 'GET') {
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(`handleCb({ name:'ahreal', age:18 })`)
	} else {
		res.writeHead(404, {'Content-Type': 'application/json'})
		res.end()
	}
	
})

server.listen(3000)