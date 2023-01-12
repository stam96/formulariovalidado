import { Router } from "express";
import { crearComentario } from "../controller/controllerFormulario.js";
import { validationResultExpress } from "../helpers/errors/validation.js";
import { validateCategory } from "../helpers/validator/validateForm.js";
const router = Router();
router.post("/formulario", validateCategory, validationResultExpress, crearComentario)
export {router}