import { body } from "express-validator";
const validateCategory = [
  body("nombre", "LLenar campo nombre")
    .not()
    .isEmpty()
    .trim()
    .escape(),
    body("celular", "LLenar campo celular debe ser datos númericos")
    .isNumeric()
    .isLength({min:10, max:10})
    .withMessage("Debe ser mínimo 10 digitos")
    .not()
    .isEmpty()
    .trim()
    .escape(),
    body("correo", "LLenar campo correo")
    .isEmail()
    .normalizeEmail()
    .withMessage("Debe ser correo válido"),
    body("comentario", "Ingresar comentario")
    .isLength({min:5})
    .withMessage("Comentario debe contener al menos 5 carácteres")

];
export {
    validateCategory
}