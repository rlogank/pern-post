const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
require('dotenv').config()

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// create a post with INSERT INTO
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

// get all posts with SELECT *
app.get("/posts", async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM post ORDER BY post_id DESC LIMIT 10");
    res.json(allPosts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a single post with SELECT WHERE
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

// update a post with UPDATE WHERE
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req.body;
    const updatePost = await pool.query(
      "UPDATE post SET body = $1 WHERE post_id = $2",
      [body, id]
    );
    res.json("Post updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a post with DELETE WHERE
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await pool.query("DELETE FROM post WHERE post_id = $1", [
      id,
    ]);
    res.json("Post deleted");
  } catch (err) {
    console.error(err.message);
  }
});
const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log(`Server up and listening on port ${port}.`)
});
