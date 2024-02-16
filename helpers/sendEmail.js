import sendgrid from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();
const { SENDGRID_API_KEY } = process.env; // Из файла .env

sendgrid.setApiKey(SENDGRID_API_KEY);

const sendEmail = () => {
  const email = {
    to: "lodobo8391@tupanda.com",
    from: "sergiibort@gmail.com",
    subject: "Temp",
    html: "<h1>Local host Verify </h1>",
  };

  sendgrid
    .send(email)
    .then(() => console.log("Email send SUCCESS"))
    .catch((error) => console.log(error.message));
};

export { sendEmail };
