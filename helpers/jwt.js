const jwt = require('jsonwebtoken');

// function to generate jwt token
const generateJsonWebToken = ( userData ) => {
    return new Promise(  ( resolve, reject ) => {
        jwt.sign( userData,'secretkey', {
            expiresIn: '24h'
        }, ( err, token ) => {
            if ( err ) {
                reject('No se pudo generar el JWT');
            } else {
                resolve( token );
            }
        });
    });
}

// function to verify token
const verifyJsonWebToken = (token, callback) => {
	jwt.verify(token, 'secretkey', function(err, decoded) {
		if (err) {
			return callback(err);
		} else {
			return callback(null, decoded);
		}
	});
}


module.exports = {
    generateJsonWebToken,
    verifyJsonWebToken
}
