const functions = require('firebase-functions');
const tmpl1 = require('./templates/templates').tmpl1;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from React Resume Maker");
// });

exports.createResume = functions.https.onRequest((request, response) => {

    try{
        const htmlFile = tmpl1(request.body);
        response.statusCode = 200;
        response.contentType('text/html');
        response.send(htmlFile);
    }catch(err){
        response.statusCode = 404;
        response.send('Error');
    }
    
});
