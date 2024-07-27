const router = require('express').Router();
const { sequelize } = require('../../config/connection');

// Endpoint to check the user table schema
router.get('/user', async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'user'");
    console.log("User table columns:", results); // Log the results
    if (!results.length) {
      return res.status(404).json({ message: 'No columns found in the user table' });
    }
    res.json(results);
  } catch (err) {
    console.error("Error fetching user table columns:", err); // Log the error
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to check the post table schema
router.get('/post', async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'post'");
    console.log("Post table columns:", results); // Log the results
    if (!results.length) {
      return res.status(404).json({ message: 'No columns found in the post table' });
    }
    res.json(results);
  } catch (err) {
    console.error("Error fetching post table columns:", err); // Log the error
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to add a column to a table
router.post('/add-column', async (req, res) => {
  const { table, column, type } = req.body;
  console.log(`Adding column ${column} to table ${table} with type ${type}`); // Log the request
  try {
    await sequelize.query(`ALTER TABLE "${table}" ADD COLUMN "${column}" ${type};`);
    res.status(200).send(`Column ${column} added to ${table} table.`);
  } catch (err) {
    console.error(`Error adding column ${column} to table ${table}:`, err); // Log the error
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
