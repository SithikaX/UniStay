// src/server.js
const app = require("./app");

const PORT = 5000;

// This is the crucial part that keeps the server alive!
app.listen(PORT, () => {
  console.log(`Backend API is running on http://localhost:${PORT}`);
});
module.exports = app;
