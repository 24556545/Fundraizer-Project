const db = require('../config/crowdfunding_db');

// Get all active fundraisers including the category
exports.getAllActiveFundraisers = (req, res) => {
  const sql = `
    SELECT f.*, c.name AS category_name
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.ACTIVE = true
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

// Get all categories
exports.getAllCategories = (req, res) => {
  const sql = 'SELECT * FROM CATEGORY';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

// Get active fundraisers by search criteria (caption and/or city)
exports.getFundraisersByCriteria = (req, res) => {
  const { city = '', caption = '' } = req.query;

  let sql = `
    SELECT f.*, c.name AS category_name
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.ACTIVE = true
  `;
  const params = [];

  if (city) {
    sql += ' AND f.CITY = ?';
    params.push(city);
  }

  if (caption) {
    sql += ' AND f.CAPTION LIKE ?';
    params.push(`%${caption}%`);
  }

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

// Get fundraiser details by ID
exports.getFundraiserById = (req, res) => {
  const { id } = req.params;
  const sql = `
    SELECT f.*, c.name AS category_name
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.FUNDRAISER_ID = ?
  `;
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(404).json({ msg: 'Fundraiser not found' });
    res.status(200).json(result[0]);
  });
};
