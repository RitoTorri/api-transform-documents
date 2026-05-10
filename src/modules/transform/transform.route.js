import { Router } from "express";
import { usersController } from "./index.js";

const router = Router();

/**
 * @swagger
 * /transform/pdf:
 *  post:
 *    summary: Genera un PDF a partir de un HTML
 *    description: Genera un PDF a partir de un HTML
 *    tags:
 *      - Transformación
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              html:
 *                type: string
 *                example: "<h1>Hola Mundo</h1>"
 *                description: HTML a convertir
 *              title:
 *                type: string
 *                example: "Mi PDF"
 *                description: Título del PDF
 *              format:
 *                type: string
 *                example: "A4"
 *                description: Formato del PDF
 *    responses:
 *      201:
 *        description: PDF generado
 *      500: 
 *        description: Error interno
 */
router.post('/pdf', usersController.getPdf);

export default router;
