import { transformServices } from "./index.js";
import { responseError } from "../../shared/utils/responses.js";

export class TransformController {
  constructor() {}

  async getPdf(req, res) {
    try {
      const { html = "", title = "", format = "" } = req.body;
      const pdf = await transformServices.getPdf({ html, title, format });

      return res
        .contentType("application/pdf")
        .setHeader("Content-Disposition", `attachment; filename="${title}.pdf"`)
        .status(201)
        .send(pdf);
    } catch (error) {
      console.error(error);
      return responseError(res, { message: error.message, code: 500 });
    }
  }

  async getExcel(req, res) {
    try {
      const { colums = [], data = [], name = "" } = req.body;
      const buffer = await transformServices.getExcel({
        colums,
        data,
        name,
      });

      return res
        .contentType(
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        )
        .setHeader("Content-Disposition", `attachment; filename="${name}.xlsx"`)
        .status(201)
        .send(buffer);
    } catch (error) {
      console.error(error);
      return responseError(res, { message: error.message, code: 500 });
    }
  }
}
