import React from "react";
import axios from "axios";

export default function PostCreate() {
    const [title, setTitle] = React.useState("");

    async function onSubmit(e) {
        e.preventDefault();
        await axios
            .post("http://localhost:4000/posts", { title })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));

        setTitle("");
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
