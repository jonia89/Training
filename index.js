const express = require("express");
const app = express();
const port = process.env.port || 3000;
const {
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
} = require("./database");

app.use(express.json());

app.get("/person", async (req, res) => {
  console.log(`${selectNow()} Info - called all from person `);
  await getAllPers(req.body);
  res.sendStatus(200);
});
app.get("/certificates", async (req, res) => {
  console.log(`${selectNow()} Info - called all from certificates `);
  await getAllCert(req.body);
  res.sendStatus(200);
});
app.get("/person/:id", async (req, res) => {
  console.log(`${selectNow()} Info - called from person `);
  await getPerson(req.body.id);
  res.sendStatus(200);
});
app.get("/certificates/:id", async (req, res) => {
  console.log(`${selectNow()} Info - called from certificates `);
  await getCertificate(req.body.id);
  res.sendStatus(200);
});

app.post("/person", async (req, res) => {
  console.log(`${selectNow()} Info - called to create person `);
  await insertPerson(req.body);
  res.sendStatus(200);
});
app.post("/certificates", async (req, res) => {
  console.log(`${selectNow()} Info - called to create certificates `);
  await insertCert(req.body);
  res.sendStatus(200);
});

app.put("/person", async (req, res) => {
  console.log(`${selectNow()} Info - called to update person `);
  await updatePerson(req.body);
  res.sendStatus(200);
});
app.put("/certificates", async (req, res) => {
  console.log(`${selectNow()} Info - called to update certificates `);
  await updateCert(req.body);
  res.sendStatus(200);
});

app.delete("/person", async (req, res) => {
  console.log(`${selectNow()} Info - called to delete person `);
  await deletePerson(req.body);
  res.sendStatus(200);
});
app.delete("/certificates", async (req, res) => {
  console.log(`${selectNow()} Info - called to delete certificates `);
  await deleteCert(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
