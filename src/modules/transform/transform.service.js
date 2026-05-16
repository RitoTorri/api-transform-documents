import puppeteer from "puppeteer";
import ExcelJS from "exceljs";
import dotenv from "dotenv";

dotenv.config();

export class TransformServices {
  constructor() {}

  async getPdf({ html, format }) {
    let browser = null;
    let page = null;

    try {
      browser = await puppeteer.launch({
        headless: "new",
        executablePath: process.env.CHROME_PATH,
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
        ],
      });

      page = await browser.newPage();
      await page.setContent(html, { waitUntil: "networkidle0" });

      const pdf = await page.pdf({
        format: format || "A4",
        printBackground: true,
        margin: {
          top: "50px",
          bottom: "50px",
          left: "40px",
          right: "40px",
        },
      });

      return pdf;
    } catch (error) {
      throw error;
    } finally {
      if (page) await page.close();
      if (browser) await browser.close();
    }
  }

  async getExcel({ colums, data }) {
    try {
      // Crear un nuevo libro de trabajo
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Mi Hoja");

      // Definir columnas
      worksheet.columns = colums;

      // Agregar datos
      worksheet.addRows(data);

      // Dar estilo al encabezado
      const headerRow = worksheet.getRow(1);
      headerRow.eachCell((cell) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FF4F81BD" }, // Azul profesional
        };

        // Opcional: Agregar texto en blanco y negrita para que resalte
        cell.font = {
          color: { argb: "FFFFFFFF" },
          bold: true,
        };

        // Opcional: Agregar bordes para que parezca una tabla real
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });

      // 3. Muy importante: confirmar los cambios en la fila
      headerRow.commit();

      const buffer = await workbook.xlsx.writeBuffer();
      return buffer;
    } catch (error) {
      throw error;
    }
  }
}
