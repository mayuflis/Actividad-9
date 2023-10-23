const zod = require("zod");
/**
 * Define un esquema de validación utilizando la biblioteca "zod" para el identificador del autor (idAutor).
 *
 * @requires zod
 *
 El esquema de validación incluye las restricciones necesarias, como requerimiento, tipo válido (número), tipo entero y positividad.
 */
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
 * Define un esquema de validación utilizando la biblioteca "zod" para los datos de un autor (bodyAutor).
 *
 * El esquema de validación incluye restricciones para el nombre, email e imagen del autor, como requerimiento, tipo válido, formato de email, formato de URL, entre otros.
 *
 * @requires zod
 */
const bodyAutor = zod.object({
  nombre: zod.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  email: zod
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Invalid email address",
    }),
  imagen: zod
    .string({
      required_error: "Imagen is required",
      invalid_type_error: "Imagen must be a string",
    })
    .url({ message: "Invalid url" })
    .startsWith("https://", { message: "Must provide secure URL" })
    .endsWith(".online", { message: "Only .online domains allowed" }),
});

/**
 * Función que valida el identificador del autor (idAutor) utilizando el esquema de validación definido en "idAutor".
 *
 * @param {number} number - El número que se desea validar como identificador del autor.
 * @return {Promise<number>} - Una promesa que resuelve en el identificador del autor validado si la validación es exitosa, o rechaza con un error si la validación falla.
 */
function validatIdAutor(number) {
  return idAutor.parseAsync(number);
}

/**
 * Función que valida un objeto que contiene los datos de un autor utilizando el esquema de validación "bodyAutor".
 *
 * @param {Object} object - El objeto que contiene los datos del autor a validar.
 * @return {Promise<Object>} - Una promesa que resuelve en un objeto que representa los datos del autor validados si la validación es exitosa, o rechaza con un error si la validación falla.
 */
function validateBodyAutor(object) {
  return bodyAutor.parseAsync(object);
}

/**
 * Función que valida parcialmente un objeto que contiene los datos de un autor utilizando el esquema de validación "bodyAutor" en modo parcial.
 *
 * @param {Object} object - El objeto que contiene los datos del autor a validar parcialmente.
 * @return {Promise<Object>} - Una promesa que resuelve en un objeto que representa los datos del autor validados parcialmente si la validación es exitosa, o rechaza con un error si la validación falla.
 */
function validatPartialAutor(object) {
  return bodyAutor.partial().parseAsync(object);
}

module.exports = { validatIdAutor, validateBodyAutor, validatPartialAutor };
