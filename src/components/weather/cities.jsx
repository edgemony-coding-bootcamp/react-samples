const data = ["Milano", "Roma", "Palermo", "Trieste", "Domodossola"];

const Cities = (props) => {
  /**
   * Callback per onChange su <select>
   * @param {*} event
   */
  const cityChange = (event) => {
    const selected = event.target.value;
    // console.log(selected);
    props.notify(selected);
  };

  return (
    <section>
      <select onChange={cityChange}>
        {data.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </select>
    </section>
  );
};

export { Cities };
