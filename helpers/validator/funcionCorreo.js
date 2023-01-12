import { modelFormulario } from "../../models/index.js"

export const validarCorreo = async (correo)=>{
    const vercorreo = await modelFormulario.findOne({correo})
    if(vercorreo){
        throw new Error("Correo ya existente")
    }
    return true
}