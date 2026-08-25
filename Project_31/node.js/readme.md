# Node.js HTTP Server

A simple Node.js web server built using the built-in `http` and `fs` modules.

## Features

- Serves multiple HTML pages.
- Uses asynchronous file reading with `fs.readFile()`.
- Handles file-reading errors properly.
- Uses a modular `serveFile()` function to avoid code repetition.
- Includes a custom 404 page for unknown routes.
- Runs on port `3000`.

## Project Structure

```text
project/
│
├── server.js
├── home.html
├── about.html
├── contact.html
├── 404.html
└── README.md
```

How to Run

1. Install Node.js
   Make sure Node.js is installed on your system.
   Check the installation:
   node -v

2. Run the Server
   Open the project folder in the terminal and run:
   node server.js
   You should see:

Server running on http://localhost:3000

3. Open in Browser
   Visit:
   http://localhost:3000
