var express = require( 'express' );
var morgan = require( 'morgan' );
var swig = require('swig');
var app = express(); // creates an instance of an express application
var routes = require('./routes/');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false});

// app.use('/special/', function(req,res,next){
// 	console.log('you reasched the special area!');
// 	next();
// })

app.use(morgan('combined'));
app.use(express.static('public'));
app.use('/', routes);



//The old routes from when we were practicing:
// var counter = 0;
// var locals = {
// 	    title: 'An Example' + counter,
// 	    people: [
// 	        { name: 'Gandalf'},
// 	        { name: 'Frodo' },
// 	        { name: 'Hermione'}
// 	    ]
// 	};

// var newPeople = {
// 	people: [
// 		{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}
// 	]
// };

// app.get('/people', function(req, res, next){
// 	 res.render('index', newPeople);
// });
// //res.render( 'index', {title: 'Hall of Fame', people: people} );

// app.get('/special/page', function(req,res,next){
// 	res.send('special page!');
// })

// app.get('/', function(req, res, next) {
// 	// in some file that is in the root directory of our application
// 	swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
//     	res.status(200).send(output);
// 	});
// 	counter++;
// });

// app.get('/news', function(req, res, next){
// 	res.send('news here');
// })

// app.get('/is-anybody-in-there', function(req,res, next){
// 	res.send('yes, I`m here!');
// })

// app.post('/modernism', function(req,res, next){
// 	res.send('modernism is not art.');
// })

app.listen(3000, function(){
	console.log("server listening");
});