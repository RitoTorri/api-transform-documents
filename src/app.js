// Importación de dependencias
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger.js";

// Importación de rutas
import transformRoute from "./modules/transform/transform.route.js";

// Configuración de variables de entorno
dotenv.config();

class App {
  // Atributos
  app;
  port;

  // Inicializacion de atributos
  constructor() {
    this.app = new express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    this.urls = {
      transform: "/transform",
    };
    this.routes();
  }

  middlewares = () => {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
        message:
          "Too many requests from this IP, please try again in 15 minutes",
      }),
    );
    this.app.use(morgan("dev"));

    // Swagger UI
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  };

  routes = () => {
    this.app.use(this.urls.transform, transformRoute);
  };

  start = () => {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
      console.log(`API available at http://localhost:${this.port}/api-docs`);
    });
  };
}

export default new App();
