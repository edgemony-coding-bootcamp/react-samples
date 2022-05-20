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
    <section className="my-3">
      <h2 className="text-2xl font-bold my-1">Commenti</h2>
      <ul>
        {comments.map((e, i) => (
          <li key={i} className="card w-96 bg-base-100 shadow-xl my-3">
            <div className="card-body">
              <SingleComment data={e} />
            </div>
          </li>
        ))}
      </ul>
      <CommentForm addComment={addComment} />
    </section>
  );
};
