

// const ADJECTIVES = [
//     'boundless',
//     'plausible',
//     'sleepy',
//     'electronic',
//     'dangerous',
//     'slim',
//     'purple',
// ]

// const OBJECTS = [
//     'puddle',
//     'piano',
//     'window',
//     'bowl',
//     'socks',
//     'brocolli',
//     'chalk'
// ]

// function genRandomUsername() {
//     const adj = ADJECTIVES[Math.floor(Math.random() * 7)]
//     const obj = OBJECTS[Math.floor(Math.random() * 7)]
//     return `${adj}-${obj}`
// }



// module.exports = {
//     genRandomUsername
// }



const FIRST_NAMES = [
    'John', 'Jane', 'David', 'Emma', 'Oliver', 'Sophia', 'Michael', 'Isabella', 'Liam', 'Mia',
    'Lucas', 'Amelia', 'James', 'Emily', 'Benjamin', 'Charlotte', 'William', 'Harper', 'Elijah', 'Abigail',
    'Alexander', 'Ella', 'Matthew', 'Scarlett', 'Jack', 'Avery', 'Ethan', 'Grace', 'Daniel', 'Zoe',
    'Henry', 'Chloe', 'Jacob', 'Madison', 'Samuel', 'Aria', 'Sebastian', 'Nora', 'Aiden', 'Layla',
    'Joseph', 'Riley', 'David', 'Lily', 'Charles', 'Eleanor', 'Samuel', 'Luna', 'Anthony', 'Hazel',
    'Leo', 'Stella', 'David', 'Lucy', 'Matthew', 'Victoria', 'Mason', 'Nina', 'Isaac', 'Ella'
];

const LAST_NAMES = [
    'Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Roberts', 'Walker',
    'Young', 'King', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzales', 'Nelson', 'Carter', 'Mitchell',
    'Perez', 'Robinson', 'Turner', 'Collins', 'Edwards', 'Stewart', 'Morris', 'Murphy', 'Rivera', 'Cook',
    'Rogers', 'Gutierrez', 'Peterson', 'Gray', 'James', 'Wright', 'Cameron', 'Mendoza', 'Ruiz', 'Price'
];

function genRandomUsername() {
    const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    return `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
}

module.exports = {
    genRandomUsername
};

