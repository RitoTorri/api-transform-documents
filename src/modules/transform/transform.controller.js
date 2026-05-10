import { usersService } from "./index.js";
import {
  responseSuccess,
  responseError,
} from "../../shared/utils/responses.js";

export class UsersController {
  constructor() {}

  async getPdf(req, res) {
    try {
      const { html = "", title = "", format = "" } = req.body;

      await usersService.getPdf({ html, title, format });

      return res.contentType("application/json").status(201).json({ message: "PDF generado" });
    } catch (error) {
      return responseError(res, { message: error.message, code: 500 });
    }
  }
}
