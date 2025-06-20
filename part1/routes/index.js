Firerennn:
const express = require('express');
const router = express.Router();

Firerennn:
const express = require('express');
const router = express.Router();


router.get('/walkrequests/open', async (req, res) => {
  try {
    // 模拟数据返回，先别用 db
    const rows = [      { request_id: 1, dog_name: "Fido", requested_time: "10:00am" }
    ];
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch walk requests' });
  }
});

module.exports = router;
