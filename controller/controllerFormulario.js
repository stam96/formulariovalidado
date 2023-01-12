import { request, response } from "express";
import { sendMail } from "../mail/email.js";
import { modelFormulario } from "../models/index.js";

export const crearComentario = async (req = request, res = response) => {
  try {
    const { nombre, celular, correo, comentario } = req.body;
    const formulario = new modelFormulario({
      nombre,
      celular,
      correo,
      comentario,
    });
    await formulario.save();
    await sendMail(formulario);
    return res.status(200).json({
      msg: "Creando formulario",
      formulario,
    });
  } catch (error) {
    return res.status(505).json({ msg: "error de servidor" });
  }
};
