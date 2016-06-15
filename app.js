var express = require( 'express' );
var morgan = require( 'morgan' );
var app = express(); // creates an instance of an express application
app.use('/special/', function(req,res,next){
	console.log('you reasched the special area!');
	next();
})

app.use(morgan('combined'));

app.get('/special/page', function(req,res,next){
	res.send('special page!');
})

app.get('/', function(req, res, next) {
	res.status(200).send('yo!');
});

app.get('/news', function(req, res, next){
	res.send('news here');
})

app.get('/is-anybody-in-there', function(req,res, next){
	res.send('yes, I`m here!');
})

app.post('/modernism', function(req,res, next){
	res.send('modernism is not art.');
})

app.listen(3000, function(){
	console.log("server listening");
});