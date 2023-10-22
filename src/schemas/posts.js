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
    required_error: "idPosts is required",
    invalid_type_error: "idPosts must be a number",
  })
  .int({
    invalid_type_error: "idPosts must be an integer",
  })
  .positive({
    invalid_type_error: "idPosts must be a positive number",
  });

const bodyPosts = zod.object({
  titulo: zod
    .string({
      required_error: "Titulo is required",
      invalid_type_error: "Titulo must be a string",
    })
    .max(75, { message: "Must be 75 fewer characters long" }),
  descripcion: zod
    .string({
      required_error: "Descripción is required",
      invalid_type_error: "Descripción must be a string",
    })
    .max(65535, { message: "Must be 65535 fewer characters long" }),
  fecha_creacion: zod.coerce.date(),
  categoria: zod.enum([
    "Informativo",
    "Educativo",
    "Publicitario",
    "De concientizacion",
    "De actualidad",
    "De terceros",
  ]),
  autores_idautores: zod
    .number({
      required_error: "idPosts is required",
      invalid_type_error: "idPosts must be a number",
    })
    .int({
      invalid_type_error: "idPosts must be an integer",
    })
    .positive({
      invalid_type_error: "idPosts must be a positive number",
    }),
});

function validatIdPosts(number) {
  console.log(number);
  return idAutor.parseAsync(number);
}

function validateBodyPosts(object) {
  return bodyPosts.parseAsync(object);
}

function validatePartialBody(object) {
  return bodyPosts.partial().parseAsync(object);
}
module.exports = {
  validatIdPosts,
  validateBodyPosts,
  validatePartialBody,
};
