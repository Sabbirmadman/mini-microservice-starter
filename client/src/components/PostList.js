import React from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
    const [posts, setPosts] = React.useState({});

    React.useEffect(() => {
        async function fetchPosts() {
            const res = await axios.get("http://localhost:4000/posts");
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

    return (
        <div className="d-flex flex-row flex-wrap justify-content-around">
            {Object.values(posts).map((post) => (
                <div
                    key={post.id}
                    className="card"
                    style={{ marginBottom: "20px", width: "30%" }}
                >
                    <div className="card-body">
                        <h3>{post.title}</h3>
                        <CommentList postId={post.id} />
                        <CommentCreate postId={post.id} />
                    </div>
                </div>
            ))}
        </div>
    );
}
