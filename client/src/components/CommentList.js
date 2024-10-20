import React from "react";
import axios from "axios";

export default function CommentList({ postId }) {
    const [comments, setComments] = React.useState({});

    React.useEffect(() => {
        async function fetchComments() {
            const res = await axios.get(
                `http://localhost:4001/posts/${postId}/comments`
            );
            setComments(res.data);
        }

        fetchComments();
    }, []);
    return (
        <div>
            {Object.values(comments).map((comment) => (
                <li key={comment.id}>{comment.content}</li>
            ))}
        </div>
    );
}
