export const SingleComment = (props) => {
  const data = props.data || {
    username: "test",
    timestamp: new Date(),
    content: "",
    rating: 3,
  };

  const createStars = (value) => {
    const arr = Array.from(new Array(value)).fill("⭐");
    return arr.join(" ");
  };

  const getDate = (ts) => new Date(ts).toLocaleDateString();
  const getTime = (ts) => new Date(ts).toLocaleTimeString();

  return (
    <>
      <h5>{data.username}</h5>
      <span>
        {getDate(data.timestamp)} - {getTime(data.timestamp)}
      </span>
      <p>{data.content}</p>
      <div>{createStars(data.rating)}</div>
    </>
  );
};
