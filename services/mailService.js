"use strict";
const constant = require('../db/constants')
const nodemailer = require("nodemailer");
require('dotenv-flow')

class MailService {
    constructor() { }
    send(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let transporter = nodemailer.createTransport({
                    host: 'smtp.ethereal.email',
                    port: 587,
                    auth: {
                        user: 'everardo.klein37@ethereal.email',
                        pass: '84jzpBrFcyJz3DxbRs'
                    }
                });
                let info = await transporter.sendMail({
                    from: constant.EmailId,
                    to: 'gideon.ryan42@ethereal.email',
                    subject: data.subject,
                    // text: "Hello world?",
                    html: data.html,
                });
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                resolve(true)
            } catch (err) {
                reject(err);
            }
        })
    }
}
module.exports = MailService
