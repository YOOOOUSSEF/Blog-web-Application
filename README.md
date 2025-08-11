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

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-web.git
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
npm start
```
The server will start at:
```
http://localhost:3000/
```

---

## Project Structure
```
blog-web/
├── index.js         # Main application entry point
├── package.json     # Project metadata and dependencies
├── public/          # Static assets (CSS, JS, images)
├── views/           # Template files (EJS)
│   ├── partials/    # Header, footer, and reusable layouts
│   ├── index.ejs    # Home page
│   ├── about.ejs    # About Me page
│   ├── contact.ejs  # Contact page
│   └── manage.ejs   # Blog management page
└── node_modules/    # Installed dependencies
```
---

## Author
**Your Name** – Developer & Owner of the Blog Web App
