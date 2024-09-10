var AWS = require('aws-sdk');
var ses = new AWS.SES();

var SENDER = 'developpyramid@gmail.com';

var response = {
 "isBase64Encoded": false,
 "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
 "statusCode": 200,
 "body": "{\"result\": \"Success.\"}"
 };

const handler = function (event, context) {
    console.log('Received event:', event);
    sendEmail2(event, function (err, data) {
        context.done(err, null);
    });
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });
    
};
 
function sendEmail (event, done) {
    var bodyContent = event;
    var params = {
        Destination: {
            ToAddresses: [
                SENDER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'Name: ' + bodyContent.Name + '\nEmail ID: ' + bodyContent.EmailID + '\nPhone Number: ' + bodyContent.PhoneNumber + '\nQuery: ' + bodyContent.Query,
                    Charset: 'UTF-8'
                },
                Html:{
                    
                    Data : "<body style = 'background-color: #ecf0f1; text-align: center'><div style = 'background-color: #3498db; width: 100%; text-align: center; color: white;'><h2 style = 'padding: 50px'> Pyramid Contact Us! <h2></div><div style = 'color: black; text-align: left; padding: 0px 0px 25px 25px'>"
                    
+"<p style = 'font-weight: bold'>Name: "+bodyContent.Name+"</p>\n\n"
+"<p style = 'font-weight: bold'>Email ID: "+bodyContent.EmailID+" </p>\n\n"
+"<p style = 'font-weight: bold'>Phone Number: "+bodyContent.PhoneNumber+"</p>\n\n"
+"<p style = 'font-weight: bold'>Query: "+ bodyContent.Query+"</p>\n\n </div></body>",
                }
            },
            Subject: {
                Data: 'Contact us Response from : ' + bodyContent.Name,
                Charset: 'UTF-8'
            },
            
        },
        ReplyToAddresses :[bodyContent.EmailID],
        Source: SENDER
    };
    console.log(params);
    ses.sendEmail(params, done);
}
function sendEmail2 (event, done) {
    var bodyContent = event;
    var RECEIVER2 = bodyContent.EmailID;
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER2
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: "Greetings "+ bodyContent.Name +",\n\n\nThank you for reaching out to Pyramid Developers. We are very excited to partner with you to build your software requirement and help grow your business. \n Our team will call you back very soon\n\nThank you, again, for taking the time to reach out to us.\n\nBest regards,\n\nPyramid Developers",
                    Charset: 'UTF-8'
                },
                Html:{
                    
                    Data : "<body style = 'background-color: #ecf0f1; text-align: center'><div style = 'background-color: #3498db; width: 100%; text-align: center; color: white;'><h2 style = 'padding: 50px'>Pyramid Developers Contact Response! <h2></div><div style = 'color: black; text-align: left; padding: 0px 0px 25px 25px'>"
                    +"<p>" + "Greetings " + bodyContent.Name + " ,<br> <br>Thank you for reaching out to Pyramid Developers. We are very excited to partner with you to build your software requirement and help grow your business.<br><br>Thank you, again, for taking the time to reach out to us.<br><br>Best regards,<br>Pyramid Developers" + "</p>\n\n </div></body>",
                }
            },
            Subject: {
                Data: 'Contact us Acknowledgment [Pyramid Developers]',
                Charset: 'UTF-8'
            },
            
        },
        ReplyToAddresses :[SENDER],
        Source: SENDER
    };console.log(params);
    ses.sendEmail(params, done);
}

export default handler