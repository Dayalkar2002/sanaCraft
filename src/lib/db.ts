import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'sanacraft.db');
const db = new Database(dbPath);

// Initialize SQL Users table
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mobile TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    email TEXT,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export interface UserRecord {
  id: number;
  mobile: string;
  username: string;
  email?: string;
  password?: string;
  created_at: string;
}

export function findUserByUsernameOrEmail(identifier: string): UserRecord | undefined {
  const query = db.prepare(`
    SELECT * FROM users 
    WHERE LOWER(username) = LOWER(?) OR LOWER(email) = LOWER(?)
  `);
  return query.get(identifier, identifier) as UserRecord | undefined;
}

export function findUserByMobile(mobile: string): UserRecord | undefined {
  const cleanMobile = mobile.trim();
  const query = db.prepare(`SELECT * FROM users WHERE mobile = ?`);
  return query.get(cleanMobile) as UserRecord | undefined;
}

export function createUser(data: { mobile: string; username: string; password: string; email?: string }) {
  const insert = db.prepare(`
    INSERT INTO users (mobile, username, email, password)
    VALUES (?, ?, ?, ?)
  `);
  const result = insert.run(data.mobile.trim(), data.username.trim(), data.email?.trim() || null, data.password);
  return result.lastInsertRowid;
}

export function updatePassword(identifier: string, newPassword: string): boolean {
  const update = db.prepare(`
    UPDATE users 
    SET password = ? 
    WHERE LOWER(username) = LOWER(?) OR mobile = ? OR LOWER(email) = LOWER(?)
  `);
  const result = update.run(newPassword, identifier, identifier, identifier);
  return result.changes > 0;
}

export default db;
