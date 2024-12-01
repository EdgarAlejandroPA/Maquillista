const ListDates = (req, res) => {
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
}
module.exports = ListDates;