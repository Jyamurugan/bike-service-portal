var nodemailer = require('nodemailer');
var templateCreator = require('./email-template');

function sendMail(customerName, service, location, contact) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rylmotorschennai@gmail.com',
            pass: 'Royal#12345'
        }
    });
    
    const mailOptions = {
        from: 'rylmotorschennai@gmail.com', // sender address
        to: 'rylmotorschennai@gmail.com', // list of receivers
        subject: 'New Booking Notification', // Subject line
        html: templateCreator(customerName, service, location, contact)
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err)
        }
        else {
            console.log(info);
        }
        transporter.close();
     });

}

module.exports = sendMail;