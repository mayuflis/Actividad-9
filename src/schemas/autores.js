/**
 * Define un esquema de validación utilizando la biblioteca "zod" para el identificador del autor (idAutor).
 *
 * @requires zod
 */
const zod = require("zod");

// El esquema de validación incluye las restricciones necesarias, como requerimiento, tipo válido (número), tipo entero y positividad.
const idAutor = zod
  .number({
    required_error: "idAutor is required",
    invalid_type_error: "idAutor must be a number",
  })
  .int({
    invalid_type_error: "idAutor must be an integer",
  })
  .positive({
    invalid_type_error: "idAutor must be a positive number",
  });

/**
 * Función que valida el identificador del autor (idAutor) utilizando el esquema de validación definido en "idAutor".
 *
 * @param {number} number - El número que se desea validar como identificador del autor.
 * @return {Promise<number>} - Una promesa que resuelve en el identificador del autor validado si la validación es exitosa, o rechaza con un error si la validación falla.
 */
function validatIdAutor(number) {
  console.log(number);
  return idAutor.parseAsync(number);
}
module.exports = { validatIdAutor };
