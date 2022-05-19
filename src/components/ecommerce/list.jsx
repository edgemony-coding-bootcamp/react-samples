import { useState, useEffect } from "react";
import { Product } from "./product";

const mock = [
  {
    id: 0,
    title: "prodotto 1",
    price: 0,
    image: "",
  },
  {
    id: 1,
    title: "prodotto 2",
    price: 0,
    image: "",
  },
  {
    id: 2,
    title: "prodotto 3",
    price: 0,
    image: "",
  },
];

export const List = ({
  category,
  search,
  addToCart,
  removeFromCart,
  cartIDs,
}) => {
  const [source, setSource] = useState([]);
  const [products, setProducts] = useState(mock);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();

    setSource(data);
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = source
      .filter((product) => {
        if (category === "everything") {
          return product;
        } else {
          return product.category === category;
        }
      })
      .filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );

    setProducts(filtered);

    // eslint-disable-next-line
  }, [category, search]);

  const getProductId = (id, inCart) => {
    const item = products.filter((element) => element.id === id);
    inCart ? removeFromCart(item) : addToCart(item);
  };

  return (
    <section>
      <ul className="grid grid-cols-3 gap-4">
        {products.map((item) => (
          <li key={item.id} className={isLoading ? "loading" : ""}>
            <Product
              id={item.id}
              name={item.title}
              price={item.price}
              image={item.image}
              getProductId={getProductId}
              inCart={cartIDs.includes(item.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
