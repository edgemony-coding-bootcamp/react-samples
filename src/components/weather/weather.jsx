const Weather = (props) => {
  const location = props.location || "seleziona una città";
  const temp = props.temp || 0;
  const status = props.status || "N/A";

  return (
    <section>
      <ul>
        <li>Location: {location}</li>
        <li>Temperatura: {temp}° K</li>
        <li>Condizione: {status}</li>
      </ul>
    </section>
  );
};

export { Weather };
