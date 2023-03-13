const express = require("express");
const router = express.Router();
const cors = require ("cors");
const nodemailer = require("nodemailer");


//server used to send email
const app = express();
app.use(cors());
app.listen(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: "skyj.kim7@gmail.com",
        pass:""
    },
});