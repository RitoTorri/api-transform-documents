import { usersService } from "./index.js";
import {
  responseSuccess,
  responseError,
} from "../../shared/utils/responses.js";

export class UsersController {
  constructor() {}

  async getPdf(req, res) {
    try {
      const { html = "", title = "", format = "", } = req.body;
      const pdf = await usersService.getPdf({ html, title, format });

      return res
        .contentType("application/pdf")
        .setHeader("Content-Disposition", `attachment; filename="${title}.pdf"`)
        .status(201)
        .send(pdf);
    } catch (error) {
      return responseError(res, { message: error.message, code: 500 });
    }
  }
}
