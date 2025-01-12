// const express = require('express')

// const { db } = require('./db/models')
// const { usersRoute } = require('./routes/users')
// const { postsRoute } = require('./routes/posts')


// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

// // Initialize session middleware
// app.use(session({
//   secret: 'your-session-secret',
//   resave: false,
//   saveUninitialized: true
// }));

// // Initialize Passport
// app.use(passport.initialize());
// app.use(passport.session());

// // Use auth routes
// app.use(authRoutes);


// app.use('/api/users', usersRoute)
// app.use('/api/posts', postsRoute)
// app.use('/', express.static(__dirname + '/public'))

// db.sync()
//   .then(() => {
//     app.listen(8383, () => {
//       console.log('server started on http://localhost:8383')
//     })
//   })
//   .catch((err) => {
//     console.error(new Error('Could not start database'))
//     console.error(err)
// //   })


// // const express = require('express');
// // const passport = require('passport');
// // const session = require('express-session');
// // const { db } = require('./db/models');
// // const { usersRoute } = require('./routes/users');
// // const { postsRoute } = require('./routes/posts');
// // const authRoutes = require('./routes/auth'); // Correct import of authRoutes

// // const app = express();
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // // Initialize session middleware
// // app.use(session({
// //   secret: 'your-session-secret',
// //   resave: false,
// //   saveUninitialized: true
// // }));

// // app.get('/login', (req, res) => {
// //   res.sendFile(__dirname + '/public/index.html');
// // });


// // // Initialize Passport
// // app.use(passport.initialize());
// // app.use(passport.session());

// // // Use auth routes
// // app.use(authRoutes);  // This will now work correctly

// // app.use('/api/users', usersRoute);
// // app.use('/api/posts', postsRoute);
// // app.use('/', express.static(__dirname + '/public'));

// // db.sync()
// //   .then(() => {
// //     app.listen(8383, () => {
// //       console.log('Server started on http://localhost:8383');
// //     });
// //   })
// //   .catch((err) => {
// //     console.error('Could not start database');
// //     console.error(err);
// //   });


// const express = require('express')

// const { db } = require('./db/models')
// const { usersRoute } = require('./routes/users')
// const { postsRoute } = require('./routes/posts')

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))


// // Route for the startup page (index.html)
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/startpage.html'); // Serve the startup page (index.html)
// });

// // Route for the browse blogs page (posts)
// app.use('/browse-blogs', postsRoute); // This can be handled by the postsRoute if it's for blog content.

// app.use('/api/users', usersRoute)
// app.use('/api/posts', postsRoute)
// app.use('/', express.static(__dirname + '/public'))

// db.sync()
//   .then(() => {
//     app.listen(8383, () => {
//       console.log('server started on http://localhost:8383')
//     })
//   })
//   .catch((err) => {
//     console.error(new Error('Could not start database'))
//     console.error(err)
//   })



const express = require('express');
const path = require('path');

const { db } = require('./db/models');
const { usersRoute } = require('./routes/users');
const { postsRoute } = require('./routes/posts');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for the startup page (startpage.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'startpage.html'));  // Serve the startup page
});

// Route for the browse blogs page
app.get('/browse-blogs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Serve the posts page (e.g., the blog content page)
});

// API Routes
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);

// Serve static files (for images, CSS, JS, etc.)
app.use('/', express.static(path.join(__dirname, 'public')));

db.sync()
  .then(() => {
    app.listen(8383, () => {
      console.log('Server started on http://localhost:8383');
    });
  })
  .catch((err) => {
    console.error(new Error('Could not start database'));
    console.error(err);
  });
