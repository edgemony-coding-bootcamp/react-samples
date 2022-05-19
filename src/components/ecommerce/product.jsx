export const Product = (props) => {
  const name = props.name || "Product name";
  const price = props.price || 100;
  const image = props.image || "";
  const id = props.id || 0;
  const inCart = props.inCart || false;

  const onClick = () => {
    props.getProductId(id, inCart);
  };

  return (
    <article className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p>Prezzo: {price}€</p>
        {inCart ? (
          <button onClick={onClick} className="btn btn-error">
            Rimuovi dal carrello
          </button>
        ) : (
          <button onClick={onClick} className="btn btn-primary">
            Aggiungi al carrello
          </button>
        )}
      </div>
    </article>
  );
};
