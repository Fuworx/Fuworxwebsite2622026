import nodemailer from "nodemailer";

//Create a reusable transporter for Zoho Mail
const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_MAIL_HOST,
  port: parseInt(process.env.ZOHO_MAIL_PORT || "465"),
  secure: true, // Use TLS (port 465)
  auth: {
    user: process.env.ZOHO_MAIL_USER,
    pass: process.env.ZOHO_MAIL_PASSWORD,

  },
  
});


console.log("HOST:", process.env.ZOHO_MAIL_HOST);
console.log("PORT:", process.env.ZOHO_MAIL_PORT);

// Verify connection on startup
transporter.verify((error: any, success : any) => {
  if (error) {
    console.error("Zoho Mail Configuration Error:", error);
  } else {
    console.log("Zoho Mail is ready to send emails");
  }
});

export default transporter;


