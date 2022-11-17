const dotenv = require("dotenv");
const { Pool, Client } = require("pg");
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});
async function selectNow() {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT NOW();");
    console.log("OK:", res.rows[0]);
  } catch (err) {
    console.log(err?.stack);
  }
  client.release();
  pool.end();
}
//selectNow();

async function insertPerson(name, age, student) {
  try {
    const res = await pool.query(
      `INSERT INTO person(name, age, student) VALUES ($1, $2, $3);`,
      [name, age, student]
    );
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function insertCert(name, person_id) {
  try {
    const res = await pool.query(
      "INSERT INTO certificates(name, person_id) VALUES($1, $2) RETURNING *",
      [name, person_id]
    );
  } catch (err) {
    console.log("Jotain meni vikaan...", err.stack);
  }
}
async function updatePerson(id) {
  try {
    const res = await pool.query(
      `UPDATE person SET student=false WHERE id = $1`,
      [id]
    );
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}
async function updateCert(person_id) {
  try {
    const res = await pool.query(
      `UPDATE certificates SET name=$2 WHERE person_id = $3`,
      [person_id]
    );
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function deletePerson(id) {
  try {
    const res = await pool.query(`DELETE FROM person WHERE id = $1`, [id]);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}
async function deleteCert(id) {
  try {
    const res = await pool.query(`DELETE FROM certificates WHERE id = $1`, [
      id,
    ]);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function getAllPers() {
  try {
    const res = await pool.query(`SELECT * FROM person`);
    console.log(res.rows);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function getPerson(id) {
  try {
    const res = await pool.query(`SELECT name FROM person WHERE id =$1`, [id]);
    console.log(res.rows[0]);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function getAllCert() {
  try {
    const res = await pool.query(`SELECT * FROM certificates`);
    console.log(res.rows);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function getCertificate(person_id) {
  try {
    const res = await pool.query(
      `SELECT name FROM certificates WHERE person_id = $3`,
      [person_id]
    );
    console.log(res.rows[0]);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

module.exports = {
  insertPerson,
  insertCert,
  updatePerson,
  updateCert,
  deletePerson,
  deleteCert,
  getAllPers,
  getPerson,
  getCertificate,
  getAllCert,
  selectNow,
};
