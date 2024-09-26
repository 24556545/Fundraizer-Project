const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/crowdfunding_db.js');
require('dotenv').config();

// Register a new user
exports.register = (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;

    // Insert user into the database with email
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hash], (err, result) => {
      if (err) {
        return res.status(500).json({ msg: 'Error registering user', error: err });
      }
      res.status(201).json({ msg: 'User registered successfully' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists by email
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    // Compare the password
    bcrypt.compare(password, result[0].password, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) {
        return res.status(401).json({ msg: 'Invalid credentials' });
      }

      // Generate JWT token using the correct primary key (e.g., user_id)
      const token = jwt.sign({ id: result[0].user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Update last login using the correct column name (e.g., user_id)
      const lastLogin = new Date();
      const updateLoginSql = 'UPDATE users SET last_login = ? WHERE user_id = ?';
      db.query(updateLoginSql, [lastLogin, result[0].user_id], (err, updateResult) => {
        if (err) throw err;

        res.json({ token, msg: 'Login successful', lastLogin });
      });
    });
  });
};

