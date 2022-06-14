const express = require("express");
var expressWs = require("express-ws");
const app = express();
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

// Initialize WS
expressWs(app);

// Create a new 'connection set' to hold each clients socket connection
const connections = new Set();

// Define handler, called on when new WS connection is made
const wsHandler = (ws) => {
  connections.add(ws);

  ws.on("message", async () => {
    const allPosts = await pool.query(
      "SELECT * FROM post ORDER BY post_id DESC LIMIT 10"
    );
    connections.forEach((conn) => {
      conn.send(JSON.stringify(allPosts.rows));
    });
  });
  ws.on("close", () => {
    connections.delete(ws);
  });
};

app.ws("/post", wsHandler);

// ROUTES
// Create a post with INSERT INTO
app.post("/posts", async (req, res) => {
  try {
    const { body } = req.body;
    const newPost = await pool.query(
      "INSERT INTO post (body) VALUES($1) RETURNING *",
      [body]
    );
    res.json(newPost.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all posts with SELECT *
app.get("/posts", async (req, res) => {
  try {
    const allPosts = await pool.query(
      "SELECT * FROM post ORDER BY post_id DESC LIMIT 50"
    );
    res.json(allPosts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a single post with SELECT WHERE
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await pool.query("SELECT * FROM post WHERE post_id = $1", [
      id,
    ]);
    res.json(post.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a post with UPDATE WHERE
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req.body;
    await pool.query("UPDATE post SET body = $1 WHERE post_id = $2", [
      body,
      id,
    ]);
    res.json("Post updated");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a post with DELETE WHERE
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM post WHERE post_id = $1", [id]);
    res.json("Post deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// Host the static files in the build directory
const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Server up and listening on port ${port}.`);
});
