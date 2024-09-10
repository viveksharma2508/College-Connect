Here’s the updated `README.md` with a section for adding screenshots:

---

# College-Connect

## Database Setup

```shell
$ sqlite3 cbsocialmediadb.db
```

```sqlite
-- Create tables and schema as needed
```

## Project Structure

### Backend (Server)
```shell
src
├── controllers         # functions to connect routes to db operations
├── db                  # db connection and model definitions
├── public              # html/js/css files for static part of site
└── routes              # express middlewares (route wise)
```

### Frontend (Client Side Code)

```shell
src/public
├── app                                     # our own frontend js code
│   └── common.js
├── components                              # own own html snippets
│   └── navbar.html
├── css                                     # css libraries we are using
│   └── bootstrap.css
├── fonts                                   # fonts that we are using
│   ├── Muli-Italic.woff2
│   ├── Muli.woff2
│   └── muli.css
├── index.html                              # first / home page
└── js                                      # js libraries we are using
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js
```

## Business Logic 

### Users

1. **create users** 
    This will create a new user with a random username.

### Posts

1. **create post**
    This will create a new post. Required fields are:
    - username (the author of this post)
    - title
    - body 

2. **show all posts**
    List all existing posts. Filtering support:
    - Filter by username
    - Filter by query contained in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD` 

### Comments 

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**


## API Documentation 

### `users` 

1. `POST /users` 

Creates a new user with random username and a user id.

2. `GET /users/{userid}`

Get a user with a given user id.

3. `GET /users/{username}`

Get a user with a given username.


### `posts` 

1. `GET /posts` 

Get all posts by everyone.

2. `POST /posts` 

Create a new post. Required fields in body:
```
userId=
title=
body=
```

## Screenshots

Add screenshots of your project below:

1. **Homepage**
   ![Homepage](path/to/homepage-screenshot.png)

2. **User Profile**
   ![User Profile](path/to/user-profile-screenshot.png)

3. **Post Creation**
   ![Post Creation](path/to/post-creation-screenshot.png)

4. **Comments Section**
   ![Comments Section](path/to/comments-section-screenshot.png)

