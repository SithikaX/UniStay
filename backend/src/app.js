// backend/src/app.js
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const pool = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("UniStay API is running successfully!");
});

// 1. Fetch Properties (Existing)
app.get("/api/properties", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM properties");
    res.json({ success: true, data: result.rows });
  } catch (err) {
    console.error("Error fetching properties", err.stack);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// 2. User Sign Up Route
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    // Check if user already exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    if (userExists.rows.length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already registered." });
    }

    // Hash the password securely
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Insert user into database
    const newUserData = await pool.query(
      `INSERT INTO users (first_name, last_name, email, password_hash, role) 
       VALUES ($1, $2, $3, $4, $5) RETURNING id, first_name, last_name, email, role`,
      [firstName, lastName, email, passwordHash, role || "seeker"],
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      user: newUserData.rows[0],
    });
  } catch (err) {
    console.error("Error during signup", err.stack);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// 3. User Login Route
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password." });
    }

    const user = result.rows[0];

    // Compare submitted password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password." });
    }

    res.json({
      success: true,
      message: "Logged in successfully!",
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Error during login", err.stack);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = app;
