import React from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
    const [content, setContent] = React.useState("");

    async function onSubmit(e) {
        e.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        });

        setContent("");
    }

    return (
        <div className="card-body">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input
                        type="text"
                        className="form-control"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
