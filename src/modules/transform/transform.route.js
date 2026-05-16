import { Router } from "express";
import { transformController } from "./index.js";

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
router.post("/pdf", transformController.getPdf);

/**
 * @swagger
 * /transform/excel:
 *  post:
 *    summary: Genera un Excel a partir de un array de datos
 *    description: Genera un Excel a partir de un array de datos
 *    tags:
 *      - Transformación
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Mi Excel"
 *                description: Nombre del Excel
 *              colums:
 *                type: array
 *                example: [{ header: 'ID', key: 'id', width: 10 },{ header: 'Nombre', key: 'name', width: 32 }]
 *                description: Columnas del Excel
 *              data:
 *                type: array
 *                example: [{id: 1, name: 'Juan Pérez'},{id: 2, name: 'Carlos Perez'}]
 *                description: Datos del Excel
 *    responses:
 *      201:
 *        description: Excel generado
 *      500:
 *        description: Error interno
 */
router.post("/excel", transformController.getExcel);

export default router;
