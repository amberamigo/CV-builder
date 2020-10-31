const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const htmlPdf = require('html-pdf');
const tmpl1 = require('./templates/templates').tmpl1;
const tmpl2 = require('./templates/templates2').tmpl2;
const tmpl3 = require('./templates/templates3').tmpl3;
const tmpl4 = require('./templates/templates4').tmpl4;


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from React Resume Maker");
// });

const app = express();
app.use(cors());

app.post('/previewResume', (request, response)=>{
    try{
        if(request.body.templateNumber){
            var htmlFilePreview = '';
            switch(request.body.templateNumber){
                case 1 : 
                    htmlFilePreview = tmpl1(request.body);
                    break;
                
                case 2 : 
                    htmlFilePreview = tmpl2(request.body);
                    break;
                
                case 3 : 
                    htmlFilePreview = tmpl3(request.body);
                    break;
                
                case 4 : 
                    htmlFilePreview = tmpl4(request.body);
                    break;
                
                case "1" : 
                    htmlFilePreview = tmpl1(request.body);
                    break;
                
                case "2" : 
                    htmlFilePreview = tmpl2(request.body);
                    break;
                
                case "3" : 
                    htmlFilePreview = tmpl3(request.body);
                    break;
                
                case "4" : 
                    htmlFilePreview = tmpl4(request.body);
                    break;

                default : 
                    htmlFilePreview = '<html><head></head><body><h1> Oops Its Not You, Its A Server Error :/ </h1></body></html';
            }
            response.contentType('text/html');
            response.statusCode = 200;
            response.send(htmlFilePreview);
        }else{
            response.statusCode = 404;
            response.send('Invalid Input Parameters');
        }
    }catch(err){
        response.statusCode = 404;
        response.send(err.message);
    }
});

app.post('/', (request, response) => {
    try{
        if(request.body.templateNumber){
            var htmlFilePreview = '';
            switch(request.body.templateNumber){
                case 1 : 
                    htmlFilePreview = tmpl1(request.body);
                    break;
                
                case 2 : 
                    htmlFilePreview = tmpl2(request.body);
                    break;
                
                case 3 : 
                    htmlFilePreview = tmpl3(request.body);
                    break;
                
                case 4 : 
                    htmlFilePreview = tmpl4(request.body);
                    break;
                
                case "1" : 
                    htmlFilePreview = tmpl1(request.body);
                    break;
                
                case "2" : 
                    htmlFilePreview = tmpl2(request.body);
                    break;
                
                case "3" : 
                    htmlFilePreview = tmpl3(request.body);
                    break;
                
                case "4" : 
                    htmlFilePreview = tmpl4(request.body);
                    break;
                
                default : 
                    htmlFilePreview = '<html><head></head><body><h1> Oops Its Not You, Its A Server Error :/ </h1></body></html';
            }
            htmlPdf.create(htmlFilePreview).toStream((err, Stream)=>{
                if(err){
                    throw new Error('Error In Creating PDF');
                }else{
                    response.statusCode = 200;
                    response.contentType('application/pdf');
                    Stream.pipe(response);
                }
            })
        }else{
            throw new Error('Invaid Input');
        }
    }catch(err){
        response.statusCode = 404;
        response.send('Error :'+err);
    }
});

exports.createResume = functions.https.onRequest(app);
