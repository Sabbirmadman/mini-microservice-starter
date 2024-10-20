import React from "react";

export default function CommentList({ comments }) {
    return (
        <div>
            {Object.values(comments).map((comment) => (
                <li key={comment.id}>{comment.content}</li>
            ))}
        </div>
    );
}
