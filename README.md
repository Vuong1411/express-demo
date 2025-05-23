# Express Demo Project

## Project Overview

This is a demonstration project built with Express.js.

## Screenshots

### Home Page
![Page](./public/img/home.png)

### Search page
![Page](./public/img/search1.png)

![Page](./public/img/search2.png)

![Page](./public/img/search3.png)

### Code
![Code](./public/img/code-home.png)
![Code](./public/img/code-search1.png)
![Code](./public/img/code-search2.png)
![Code](./public/img/code-search3.png)

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Clone the Repository

```bash
# Clone with HTTPS
git clone https://github.com/Vuong1411/express-demo.git

# Navigate to project directory
cd express-demo
```

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Your application should now be running on [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/social-media-web-demo
   ├── /config         # Database and app configuration
   ├── /models         # Data models
   │   ├── User.js     # User model
   │   ├── Post.js     # Post model
   │   └── Comment.js  # Comment model
   ├── /public         # Static assets
   │   ├── /css
   │   ├── /js
   │   └── /images
   ├── /routes         # Route handlers
   ├── /views          # EJS templates
   │   ├── index.ejs   # Home page
   │   ├── search.ejs  # Search results
   │   ├── login.ejs   # Login page
   │   └── profile.ejs # User profile page
   ├── app.js          # Application entry point
   └── README.md
```