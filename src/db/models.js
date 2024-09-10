const Sequelize = require ('sequelize');

const db = new Sequelize({
    dialect: 'mysql',
    database: 'cbsocialmediadb',
    username: 'cbsocialuser',
    password: 'lakshaybh2509',
});

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
};
const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
};
const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false
};

const Users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
});

const Posts = db.define('post', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
});

const Comments = db.define('comment', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

Users.hasMany(Posts);
Posts.belongsTo(Users);

Users.hasMany(Comments);
Comments.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);

// Authenticate and sync
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return db.sync({ force: true });
    })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    db,
    Users,
    Posts,
    Comments
};


