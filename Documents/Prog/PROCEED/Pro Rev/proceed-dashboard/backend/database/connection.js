const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, 'proceed_revenue.db');
const SCHEMA_PATH = path.join(__dirname, 'schema.sql');

class Database {
  constructor() {
    this.db = null;
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(DB_PATH, (err) => {
        if (err) {
          console.error('Error opening database:', err);
          reject(err);
        } else {
          console.log('Connected to SQLite database');
          this.initializeSchema()
            .then(() => resolve(this.db))
            .catch(reject);
        }
      });
    });
  }

  async initializeSchema() {
    const schema = fs.readFileSync(SCHEMA_PATH, 'utf8');
    const statements = schema.split(';').filter(stmt => stmt.trim());
    
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        for (const statement of statements) {
          if (statement.trim()) {
            this.db.run(statement, (err) => {
              if (err) {
                console.error('Error executing schema statement:', err);
                reject(err);
                return;
              }
            });
          }
        }
        resolve();
      });
    });
  }

  async run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function(err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, changes: this.changes });
      });
    });
  }

  async get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  async all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}

module.exports = new Database();