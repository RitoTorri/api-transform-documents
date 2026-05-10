import puppeteer from "puppeteer";

export class UsersServices {
  constructor() {}

  async getPdf({ html, format }) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

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

    await browser.close();
    return pdf;
  }
}
