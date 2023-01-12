import { Schema, model } from "mongoose";
const schemaFormulario = new Schema(
  {
    nombre: {
      type: String,
    },
    celular: {
      type: String,
    },
    correo: {
      type: String,
    },
    comentario: {
      type: String,
    },
  },
  {
    versionKey: false,
    timeseries: false,
  }
);
schemaFormulario.methods.toJSON = function () {
  const { _id, ...formulario } = this.toObject();
  formulario.id = _id;
  return formulario;
};

export const modelFormulario = model("Formulario", schemaFormulario);
