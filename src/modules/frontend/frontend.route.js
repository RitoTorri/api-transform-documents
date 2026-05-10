import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

router.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "..", "..", "public", "index.html");

  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error al enviar el HTML:", err);
      res.status(404).send("No se encontró el archivo index.html");
    }
  });
});

export default router;
