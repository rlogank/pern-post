-- run in terminal
CREATE DATABASE pernpost;

-- run in terminal
CREATE TABLE "post"(
    post_id SERIAL PRIMARY KEY,
    body VARCHAR(255)
    username VARCHAR(15)
    section VARCHAR(50)
);