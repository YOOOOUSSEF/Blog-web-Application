# Blog Web App

This is a Node.js and Express-based web application for creating, viewing, and managing blog posts.  
It also includes an **About Me** page and a **Contact** page.

---

## Features
- 📝 Create and publish blogs
- 📖 View all blogs
- ✏️ Edit or delete blogs
- 🙋 About Me page
- 📬 Contact page

---

## Installation

### Prerequisites
- Node.js (v14+ recommended)
- npm (comes with Node.js)
- Express.js (will be installed automatically with `npm install`)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/YOOOOUSSEF/blog-web.git
   cd blog-web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Running the Development Server
```bash
node index.js
```
The server will start at:
```
http://localhost:3000/
```

---

## Project Structure
```
blog-web/
├── index.js # Main application entry point
├── package.json # Project metadata and dependencies
├── public/ # Static assets (CSS, images)
├── views/ # Template files (EJS)
│ ├── partials/ # Header, footer, and reusable layouts
│ │ ├── header.ejs # Website header
│ │ └── footer.ejs # Website footer
│ ├── index.ejs # Home page
│ ├── about.ejs # About Me page
│ ├── contact.ejs # Contact page
│ ├── viewPage.ejs # Single blog post view
│ ├── createPage.ejs # Create new blog post
│ └── editPage.ejs # Edit existing blog post
└── node_modules/ # Installed dependencies
```
---

