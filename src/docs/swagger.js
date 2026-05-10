import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Transformación de Documentos PDF",
      version: "1.0.0",
      description: "API para construir y gestionar documentos PDF",
      contact: {
        name: "Jesus Cortez",
        url: "https://cortez-porfolio.netlify.app/",
        email: "cortezfrancisco025@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: "Servidor de desarrollo",
      },
    ],
  },
  apis: ["./src/modules/**/*.js"],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
