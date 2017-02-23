
var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic('src')).listen(8080, function(){
    console.log('This homepage is running at http://localhost:8080/index.html');
});
