var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

var compliments = [
    "Your ass sure makes those jeans look good", "you have the bluest eyes, do you ski?", 
]

//rando request fucntion
function handleRequest( request, response){
    var index = Math.floor(Math)
    response.end("it's alive!! path hit: " + request.url);


}
var server= http.createServer(handleRequest);

server.listen(PORT1, function(){
    console.log("server listening on http://localhost:%s", PORT1);
});

server.listen(PORT2, function(){
    console.log("server listening on http://localhost:%s", PORT2);
});

