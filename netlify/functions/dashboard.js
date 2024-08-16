// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   if (!req.cookies.username) {
//     return res.redirect('/login');
//   }
//   res.render('dashboard', { username: req.cookies.username });
// });

// module.exports = router;

exports.handler = async (event) => {
  // Handle dashboard logic or fetch data
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Welcome to the Dashboard!' }),
  };
};
