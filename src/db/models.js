const Sequelize = require('sequelize')

let db
if (process.env.NODE_ENV == 'testing') {
  db = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
  })
} else {
  db = new Sequelize({
    dialect: 'mysql',
    database: 'cbsocialmediadb',
    username: 'root',
    password: 'Bhardwaj.vs@7409@2525',
  })
}

const COL_ID_DEF = {
  type: Sequelize.DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true,
}
const COL_USERNAME_DEF = {
  type: Sequelize.DataTypes.STRING(30),
  unique: true,
  allowNull: false,
}
const COL_TITLE_DEF = {
  type: Sequelize.DataTypes.STRING(140),
  allowNull: false,
}

const Users = db.define('user', {
  id: COL_ID_DEF,
  username: COL_USERNAME_DEF,
})

const Posts = db.define('post', {
  id: COL_ID_DEF,
  title: COL_TITLE_DEF,
  body: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false,
  },
})

const Comments = db.define('comment', {
  id: COL_ID_DEF,
  title: COL_TITLE_DEF,
  body: {
    type: Sequelize.DataTypes.TEXT('tiny'),
  },
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

module.exports = {
  db,
  Users,
  Posts,
  Comments,
}



// const Sequelize = require('sequelize')

// let db
// if (process.env.NODE_ENV == 'testing') {
//   db = new Sequelize({
//     dialect: 'sqlite',
//     storage: ':memory:',
//   })
// } else {
//   db = new Sequelize({
//     dialect: 'mysql',
//     database: 'cbsocialmediadb',
//     username: 'root',
//     password: 'Bhardwaj.vs@7409@2525',
//   })
// }

// const COL_ID_DEF = {
//   type: Sequelize.DataTypes.INTEGER,
//   autoIncrement: true,
//   primaryKey: true,
// }
// const COL_USERNAME_DEF = {
//   type: Sequelize.DataTypes.STRING(30),
//   unique: true,
//   allowNull: false,
// }
// const COL_TITLE_DEF = {
//   type: Sequelize.DataTypes.STRING(140),
//   allowNull: false,
// }

// // Users Model with OAuth fields (provider, providerId, email)
// const Users = db.define('user', {
//   id: COL_ID_DEF,
//   username: COL_USERNAME_DEF,
//   email: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: true, // Users may not always have an email (depends on OAuth provider)
//     unique: true,    // If provided, should be unique
//   },
//   provider: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: false, // This will store the OAuth provider (e.g., google, facebook)
//   },
//   providerId: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: false, // This will store the provider-specific user ID
//   },
// })

// const Posts = db.define('post', {
//   id: COL_ID_DEF,
//   title: COL_TITLE_DEF,
//   body: {
//     type: Sequelize.DataTypes.TEXT,
//     allowNull: false,
//   },
// })

// const Comments = db.define('comment', {
//   id: COL_ID_DEF,
//   title: COL_TITLE_DEF,
//   body: {
//     type: Sequelize.DataTypes.TEXT('tiny'),
//   },
// })

// Users.hasMany(Posts)
// Posts.belongsTo(Users)

// Users.hasMany(Comments)
// Comments.belongsTo(Users)

// Posts.hasMany(Comments)
// Comments.belongsTo(Posts)

// module.exports = {
//   db,
//   Users,
//   Posts,
//   Comments,
// }


// const Sequelize = require('sequelize');

// let db;
// if (process.env.NODE_ENV == 'testing') {
//   db = new Sequelize({
//     dialect: 'sqlite',
//     storage: ':memory:',
//   });
// } else {
//   db = new Sequelize({
//     dialect: 'mysql',
//     database: 'cbsocialmediadb',
//     username: 'root',
//     password: 'Bhardwaj.vs@7409@2525',
//   });
// }

// const COL_ID_DEF = {
//   type: Sequelize.DataTypes.INTEGER,
//   autoIncrement: true,
//   primaryKey: true,
// };
// const COL_USERNAME_DEF = {
//   type: Sequelize.DataTypes.STRING(30),
//   unique: true,
//   allowNull: false,
// };
// const COL_TITLE_DEF = {
//   type: Sequelize.DataTypes.STRING(140),
//   allowNull: false,
// };

// // Users Model with OAuth fields (provider, providerId, email)
// const Users = db.define('user', {
//   id: COL_ID_DEF,
//   username: COL_USERNAME_DEF,
//   email: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: true,  // Adjust this depending on your requirements
//     unique: true,
//     validate: {
//       isEmail: true,  // Ensures the email follows the correct format
//     },
//   },
//   provider: {
//     type: Sequelize.DataTypes.STRING,
//     allowNull: false,  // This will store the OAuth provider (e.g., google, facebook)
//   }
// });

// const Posts = db.define('post', {
//   id: COL_ID_DEF,
//   title: COL_TITLE_DEF,
//   body: {
//     type: Sequelize.DataTypes.TEXT,
//     allowNull: false,
//   },
// });

// const Comments = db.define('comment', {
//   id: COL_ID_DEF,
//   title: COL_TITLE_DEF,
//   body: {
//     type: Sequelize.DataTypes.TEXT('tiny'),
//   },
// });

// // Defining relationships with cascading delete actions
// Users.hasMany(Posts, { onDelete: 'CASCADE' });
// Posts.belongsTo(Users);

// Users.hasMany(Comments, { onDelete: 'CASCADE' });
// Comments.belongsTo(Users);

// Posts.hasMany(Comments, { onDelete: 'CASCADE' });
// Comments.belongsTo(Posts);

// module.exports = {
//   db,
//   Users,
//   Posts,
//   Comments,
// };
