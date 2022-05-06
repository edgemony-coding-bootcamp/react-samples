import { useState } from "react";

export const CommentForm = (props) => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);
  const [timestamp, setTimestamp] = useState(new Date().toISOString());

  const onSubmit = (event) => {
    event.preventDefault();
    const obj = {
      username,
      content,
      rating,
      timestamp,
    };
    props.addComment(obj);

    // Reset
    setUsername("");
    setContent("");
    setRating(1);
    setTimestamp(new Date().toISOString());
  };

  const formatDate = (ts) => {
    const date = new Date(ts);
    return `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`;
  };

  const changeDate = (event) => {
    console.log(event.target.value);
    const date = new Date(event.target.value);
    setTimestamp(date.toISOString());
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Aggiungi un nuovo commento</h3>
      <input
        autoComplete="off"
        required
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        required
        type="date"
        name="timestamp"
        value={formatDate(timestamp)}
        onChange={changeDate}
      />
      <textarea
        required
        name="content"
        onChange={(event) => setContent(event.target.value)}
        value={content}
      />
      <input
        value={rating}
        onChange={(event) => setRating(parseInt(event.target.value))}
        required
        type="number"
        name="rating"
        min="1"
        max="5"
        step="1"
      />
      <div>
        <button>Aggiungi commento</button>
      </div>
    </form>
  );
};
