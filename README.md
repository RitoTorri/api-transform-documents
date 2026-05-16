# 📄 API de Transformación de Documentos PDF y Excel

🚀 Conversor de HTML a PDF y JSONS a Excel con soporte para Tailwind CSS
Esta es una API robusta y ligera diseñada para transformar estructuras HTML dinámicas en documentos PDF profesionales, permitiendo el uso de Tailwind CSS para un diseño moderno y estático. También permite generar archivos Excel a partir de JSON.

<br>

# 🛠️ Tecnologías Principales

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,js,express,docker" height="50" />
</p>

<br>

# 📥 Instalación

```bash
git clone https://github.com/RitoTorri/api-transform-documents

cd api-transform-documents

pnpm install
```

<br>

# ⚙️ Configuración

Copiar `.env.example` a `.env` y configurar las variables de entorno.

| Variable      |     Tipo     | Descripción                                                                                       | Ejemplo / Valor por defecto                                            |
| :------------ | :----------: | :------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------- |
| `PORT`        |    Número    | Puerto local en el que se levantará y escuchará el servidor de la API.                            | `3000`                                                                 |
| `CHROME_PATH` | Texto (Ruta) | Ruta absoluta del ejecutable del navegador desde donde se descargarans los archivos transformados | `"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"` |

<br>

# 🚀 Ejecutar

Para ejecutar el servidor de desarrollo:

```bash
# Entorno de desarrollo
node --watch src/index.js

# Entorno de producción
node src/index.js
```

<br>

# 📖 Rutas de la API

Documentación: `http://localhost:PORT/api-docs`  
Conversor de HTML a PDF: `http://localhost:PORT/transform/pdf`  
Conversor de JSON a EXCEL: `http://localhost:PORT/transform/excel`  
