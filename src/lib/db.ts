import Database from 'better-sqlite3';

const db = new Database('ngo.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS donors (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    phone TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS donations (
    id TEXT PRIMARY KEY,
    donor_id TEXT REFERENCES donors(id),
    amount INTEGER NOT NULL,
    type TEXT NOT NULL,
    is_recurring BOOLEAN DEFAULT 0,
    status TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS programs (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    target INTEGER,
    current_progress INTEGER DEFAULT 0,
    status TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS testimonials (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    quote TEXT NOT NULL,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Helper functions for database operations
export const getDonors = () => {
  return db.prepare('SELECT * FROM donors').all();
};

export const createDonor = (donor: { id: string; email: string; name: string; phone?: string }) => {
  const stmt = db.prepare('INSERT INTO donors (id, email, name, phone) VALUES (?, ?, ?, ?)');
  return stmt.run(donor.id, donor.email, donor.name, donor.phone);
};

export const getDonations = () => {
  return db.prepare('SELECT * FROM donations').all();
};

export const createDonation = (donation: {
  id: string;
  donor_id: string;
  amount: number;
  type: string;
  is_recurring: boolean;
  status: string;
}) => {
  const stmt = db.prepare(
    'INSERT INTO donations (id, donor_id, amount, type, is_recurring, status) VALUES (?, ?, ?, ?, ?, ?)'
  );
  return stmt.run(
    donation.id,
    donation.donor_id,
    donation.amount,
    donation.type,
    donation.is_recurring ? 1 : 0,
    donation.status
  );
};

export const getPrograms = () => {
  return db.prepare('SELECT * FROM programs').all();
};

export const getTestimonials = () => {
  return db.prepare('SELECT * FROM testimonials').all();
};

export default db;