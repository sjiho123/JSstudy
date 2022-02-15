const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "536faefdb384c8",
      pass: "2592c66205a565"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option,(error,info)=>{
        if(error){
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from : 'sasdf@gmail.com',
    to : 'asdfasdf@gmail.com',
    subject : 'test',
    text : 'hello MF'
}

send(email_data);


