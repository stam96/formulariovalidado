import nodemailerSendgrid from "nodemailer-sendgrid";
import nodemailer from "nodemailer";
const createTransport = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRIDAPI,
    })
  );
  return transport;
};

export const sendMail = async (formulario) => {
  const transporter = createTransport();
  await transporter.sendMail(
    {
      from: "rafaraul755@gmail.com", // sender address
      to: [`${formulario.correo}`, "rafaraul755@gmail.com"], // list of receivers
      subject: `${formulario.nombre}`, // Subject line
      text: "Respuesta", // plain text body
      html: `
      <h2>Gracias por las sugerencias propuestas</h2>`,
    },

    function (error, info) {
      if (error) {
        return console.log(error.message);
      }
      console.log("Mensaje enviado");
    }
  );
  return;
};
