const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Configurar CORS
app.use(cors());

// Configurar almacenamiento para Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/Users/CursosTardes/Downloads/Portafolios_Ed2/Portafolios_Ed/assets/imgs');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Ruta para subir imágenes
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ message: 'Imagen subida exitosamente' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
