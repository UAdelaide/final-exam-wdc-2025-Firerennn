const express = require('express');
const router = express.Router();


router.get('/dogs', async (req, res) => {
  try {
    const rows = [
      { dog_name: 'Buddy', size: 'Medium', owner_username: 'john_doe' },
      { dog_name: 'Luna', size: 'Small', owner_username: 'jane_smith' }
    ];
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch dogs' });
  }
});


router.get('/walkers/summary', async (req, res) => {
  try {
    const rows = [
      { walker_username: 'walker1', average_rating: 4.5, completed_walks: 12 },
      { walker_username: 'walker2', average_rating: 4.8, completed_walks: 20 }
    ];
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch walker summary' });
  }
});

module.exports = router;