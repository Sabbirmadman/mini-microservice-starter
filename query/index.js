const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

///example
// posts = {
//     key1: {
//         id: "key1",
//         title: "title1",
//         comments: [
//             {
//                 id: "key1",
//                 content: "comment1",
//             },
//             {
//                 id: "key2",
//                 content: "comment2",
//             },
//         ],
//     },
// };

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/events", (req, res) => {
    const { type, data } = req.body;
    if (type === "PostCreated") {
        const { id, title } = data;
        posts[id] = {
            id,
            title,
            comments: [],
        };
    } else if (type === "CommentCreated") {
        const { id, content, postId } = data;

        const post = posts[postId];
        console.log(posts, postId);

        post.comments.push({
            id,
            content,
        });
    }

    res.send({});
});

app.listen(4002, () => {
    console.log("Listening on port 4002");
});
