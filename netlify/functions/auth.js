// // const express = require('express');
// // const router = express.Router();

// // // Mock user data
// // const users = [];

// // // Registration page
// // router.get('/register', (req, res) => {
// //   res.render('register');
// // });

// // // Registration handler
// // router.post('/register', (req, res) => {
// //   const { username, password } = req.body;
// //   users.push({ username, password });
// //   res.redirect('/login');
// // });

// // // Login page
// // router.get('/login', (req, res) => {
// //   res.render('login');
// // });

// // // Login handler
// // router.post('/login', (req, res) => {
// //   const { username, password } = req.body;
// //   const user = users.find(u => u.username === username && u.password === password);
// //   if (user) {
// //     res.cookie('username', username);
// //     res.redirect('/dashboard');
// //   } else {
// //     res.redirect('/login');
// //   }
// // });

// // module.exports = router;

// const { parse } = require('querystring');

// exports.handler = async (event) => {
//   const { method, body } = event;

//   if (method === 'POST') {
//     const parsedBody = parse(body);
//     // Handle login/registration logic here
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Success' }),
//     };
//   }

//   return {
//     statusCode: 405,
//     body: JSON.stringify({ error: 'Method not allowed' }),
//   };
// };

const { parse } = require('querystring');

exports.handler = async (event) => {
  const { method, body } = event;

  if (method === 'POST') {
    const parsedBody = parse(body);
    const { username, password } = parsedBody;

    // Mock authentication logic
    if (username === 'user' && password === 'pass') {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Login successful!' }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Invalid credentials' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' }),
  };
};
