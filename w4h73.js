const dotenv = require("dotenv");
const { Pool, Client } = require("pg");
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: 5432,
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
selectNow();

async function insertPerson() {
  try {
    const res = await pool.query(
      `INSERT INTO person(name, age, student) VALUES ($1, $2, $3)`,
      values
    );
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function insertCert() {
  try {
    const res = await pool.query(
      "INSERT INTO certificates(name, person_id) VALUES($1, $2) RETURNING *",
      values
    );
    console.log(res.rows[0]);
  } catch (err) {
    console.log("Jotain meni vikaan...", err.stack);
  }
}
async function updatePerson() {
  try {
    const res = await pool.query(
      `UPDATE person SET student=false WHERE name = 'Seppo'`
    );
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}
async function updateCert() {
  try {
    const res = await pool.query(
      `UPDATE certificates SET name='Joni' WHERE name = 'Seppo'`
    );
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function deletePerson() {
  try {
    const res = await pool.query(`DELETE FROM person WHERE id = 44`);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}
async function deleteCert() {
  try {
    const res = await pool.query(`DELETE FROM certificates WHERE id = 13`);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function getAllPers() {
  try {
    const res = await pool.query(`SELECT * FROM person`);
    console.log(res);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function getPersons() {
  try {
    const res = await pool.query(`SELECT name FROM person`);
    console.log(res);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function getAllCert() {
  try {
    const res = await pool.query(`SELECT * FROM certificates`);
    console.log(res);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

async function getCertificate() {
  try {
    const res = await pool.query(
      `SELECT name FROM certificates WHERE person_id = 1`
    );
    console.log(res);
  } catch (err) {
    console.log("Jotain meni vikaan...", err);
  }
}

//const values = ["Seppo", 1];
const values = ["Mikko", "33", "false"];

//insertPerson();
//insertCert();
//updatePerson();
//updateCert();
//deletePerson();
//deleteCert();
//getAll();
//getPersons();
//getCertificate();
//getAllCert();
