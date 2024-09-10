const express = require('express');
const { Sequelize } = require('sequelize'); // Correct import for Sequelize

// Initialize Sequelize instance
const sequelize = new Sequelize('cbsocialmediadb', 'cbsocialuser', 'lakshaybh2509', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: console.log, // Optional: Enables logging of SQL queries
});

// Import routes and other dependencies
const { usersRoute } = require('./routes/users');
const { postsRoute } = require('./routes/posts');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define API routes
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);
app.use('/', express.static(__dirname + '/public'));

// Synchronize Sequelize with the database and start the server
sequelize.sync({ alter: true }) // Sync the database
  .then(() => {
    console.log('Database & tables synchronized!');
    app.listen(8383, () => {
      console.log('Server started on http://localhost:8383');
    });
  })
  .catch((err) => {
    console.error(new Error('Could not start database'));
    console.error(err);
  });
