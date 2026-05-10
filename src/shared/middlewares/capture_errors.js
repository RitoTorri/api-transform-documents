import { validationResult } from "express-validator";
export { responseError } from "../utils/responses.js";

export const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(422).json({
      statusCode: 422,
      message: "Errores en los datos enviados",
      errors: errors.array().map(err => ({
        msg: err.msg,
        param: err.path
      }))
    });
  }

  next();
};