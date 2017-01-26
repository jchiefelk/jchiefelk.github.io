// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = express.Router();
const app = express();
let _store;

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.resolve(__dirname, '..', 'build')));


let authenticate = ( payload, expressResponse ) => {

    return new Promise( ( resolve, reject ) => {
        let expectedPassword = config.development.expectedPassword;
        if( payload.secret !== undefined && payload.secret == expectedPassword ) {
            resolve();
        }
        else{
            reject();
        }
    });
};
//--CORS-- Allow cross origin and CORS preflight requests...
var allowCrossDomain = function(req, res, next) {
        res.header( 'Access-Control-Allow-Origin', '*' );
        res.header( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS' );
        res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Key, Mode' );
        // intercept OPTIONS method
        if( 'OPTIONS' == req.method ){
            res.sendStatus( 200 );
        }
        else {
            next();
        }
};

app.get('/api', (req, res, next) => {	
		authenticate( req.headers, res )
    	.then( () => {
  			
  		})
 		.catch( () => res.status( 500 ).json( { error: "auth fail" } ) );

});


app.post('/api', (req, res, next) => {
	_store = req.body;
    authenticate( req.headers, res )
        .then(() => {

        })
        .catch( () => res.status( 500 ).json( { error: "auth fail" } ) );

});
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

// module.exports = app;