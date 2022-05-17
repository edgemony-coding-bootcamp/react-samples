import { useState } from "react";
import { SingleComment } from "./singlecomment";
import { CommentForm } from "./form";

const data = [
  {
    username: "Pippo Pluto",
    timestamp: "2022-05-06T09:34:05.690Z",
    content: "bla bla bla bla",
    rating: 3,
  },
];

export const CommentsWidget = () => {
  const local = localStorage.getItem("react-comments");
  const initial = local && local.length > 0 ? JSON.parse(local) : data;
  const [comments, setComments] = useState(initial);

  const addComment = (value) => {
    const update = comments.concat([value]);

    setComments(update);
    localStorage.setItem("react-comments", JSON.stringify(update));
    // setComments([...comments, value])
  };

  return (
    <section>
      <h2>Commenti</h2>
      <ul>
        {comments.map((e, i) => (
          <li key={i}>
            <SingleComment data={e} />
          </li>
        ))}
      </ul>
      <CommentForm addComment={addComment} />
    </section>
  );
};
