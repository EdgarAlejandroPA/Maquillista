const Database = require('better-sqlite3');

// Crear la base de datos en memoria
const db = new Database(':memory:');

// Crear las tablas
const createTables = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS makeups (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      second_name TEXT
    );

    CREATE TABLE IF NOT EXISTS makeups_status (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      id_makeup INTEGER NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      icon TEXT,
      FOREIGN KEY (id_makeup) REFERENCES makeups(id)
    );

    CREATE TABLE IF NOT EXISTS dates (
      id INTEGER PRIMARY KEY,
      id_makeup INTEGER NOT NULL,
      id_status INTEGER NOT NULL,
      client_name TEXT NOT NULL,
      description TEXT,
      icon TEXT,
      FOREIGN KEY (id_makeup) REFERENCES makeups(id)
    );

    CREATE TABLE IF NOT EXISTS dates_data (
      id INTEGER PRIMARY KEY,
      id_date INTEGER NOT NULL,
      id_skill INTEGER NOT NULL,
      FOREIGN KEY (id_date) REFERENCES dates(id)
    );
  `);

  // Insertar maquillista principal
  db.exec(`
    INSERT INTO makeups (name, second_name) VALUES ('Karla', 'Rangel');
  `);
  db.exec(`
    INSERT INTO makeups_status (name) VALUES ('Pendiente de aprovación'), ('Aprovado'), ('Rechazado');
  `);
  // Insertar productos relacionados con Karla (id = 1)
  db.exec(`
    INSERT INTO products (id_makeup, name, description, icon) 
    VALUES 
    (1, 'maquillaje para boda', 'Maquillaje elegante para bodas', 'icono_boda.png'),
    (1, 'maquillaje casual', 'Maquillaje ligero y casual', 'icono_casual.png'),
    (1, 'maquillaje cosplay', 'Maquillaje especializado en cosplay', 'icono_cosplay.png');
  `);
};

// Ejecutar creación de tablas y datos iniciales
createTables();

module.exports = db;
