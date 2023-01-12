import { body } from "express-validator";
const validateCategory = [
  body("nombre", "LLenar campo nombre")
    .not()
    .isEmpty()
    .trim()
    .escape(),
    body("celular", "LLenar campo celular")
    .isLength({min:10})
    .withMessage("Debe ser mínimo 10 digitos")
    .not()
    .isEmpty()
    .trim()
    .escape(),
    body("correo", "LLenar campo correo")
    .isEmail()
    .normalizeEmail(),
    body("comentario", "Ingresar comentario")
    .isLength({min:5})
    .withMessage("Debe contener al menos 6 carácteres")

];
export {
    validateCategory
}