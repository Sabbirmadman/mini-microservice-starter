const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const { content } = req.body;
    const postId = req.params.id;
    const serverComments = commentsByPostId[postId] || [];
    serverComments.push({ id: commentId, content });
    commentsByPostId[postId] = serverComments;

    await axios.post("http://localhost:4005/events", {
        type: "CommentCreated",
        data: {
            id: commentId,
            content,
            postId,
        },
    });

    res.status(201).send(serverComments);
});

app.post("/events", (req, res) => {
    console.log("Received Event", req.body.type);
    res.send({});
});

app.listen(4001, () => {
    console.log("Listening on port 4001");
});
