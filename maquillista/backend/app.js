const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();

// Configurar CORS para permitir solicitudes solo desde http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json()); // Middleware para manejar JSON

// Ruta para obtener todos los maquillistas
app.get('/makeups/:id', (req, res) => {
  const { id } = req.params;
  const rows = db.prepare('SELECT id,name,second_name FROM makeups WHERE id = ?').all(id);
  res.json(rows[0] || null);
});

// Ruta para añadir un maquillista
app.post('/makeups', (req, res) => {
  const { name, second_name } = req.body;
  const stmt = db.prepare('INSERT INTO makeups (name, second_name) VALUES (?, ?)');
  const result = stmt.run(name, second_name);
  res.json({ id: result.lastInsertRowid });
});

// Ruta para obtener los productos por maquillista
app.get('/makeups/:id/products', (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare('SELECT * FROM products WHERE id_makeup = ?');
  const rows = stmt.all(id);
  res.json(rows);
});

app.post('/makeups/dates/create', (req, res) => {
  const { makeupArtistId, name, email, date, time } = req.body;

  if (!makeupArtistId || !name || !email || !date || !time) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  try {
    const stmt = db.prepare(`
      INSERT INTO dates (id_makeup, id_status, client_name, description, icon) 
      VALUES (?, ?, ?, ?, ?)
    `);
    const result = stmt.run(
      makeupArtistId,
      1, // Status predeterminado: Pendiente de aprobación
      name,
      `Cita programada por '${email}' para ${date} a las ${time} horas`,
      null
    );

    res.status(200).json({ id: result.lastInsertRowid, message: "Cita creada exitosamente." });
  } catch (err) {
    console.error("Error al crear la cita:", err);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

app.get('/', (req,res)=>{
  const rows = db.prepare('SELECT * FROM dates').all();
  res.json(rows || null);

})
app.get('/makeups/dates/:id', (req, res) => {
  const { id } = req.params;

  try {
    const stmt = db.prepare(`
      SELECT d.id, d.client_name, d.description, ms.name AS status 
      FROM dates d
      INNER JOIN makeups_status ms ON d.id_status = ms.id
      WHERE d.id = ?
    `);
    const row = stmt.get(id);

    if (!row) {
      return res.status(404).json({ error: "Cita no encontrada." });
    }

    res.json(row);
  } catch (err) {
    console.error("Error al obtener la cita:", err);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Inicializar el servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
