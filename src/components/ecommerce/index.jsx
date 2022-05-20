import { useState } from "react";

import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { List } from "./list";

export const Ecommerce = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("everything");
  const [cart, setCart] = useState([]);

  const catSelection = (value) => {
    // console.log(value);
    setCategory(value);
  };

  const searching = (value) => {
    // console.log(value);
    setSearch(value);
  };

  const addToCart = (item) => {
    const exists = cart.map((product) => product.id).includes(item[0].id);
    if (!exists) {
      setCart(cart.concat(item));
    }
  };

  const removeFromCart = (item) => {
    const remove = cart.filter((product) => product.id !== item[0].id);
    setCart(remove);
  };

  const getTotal = () => {
    return cart.length > 0
      ? cart.map((product) => product.price).reduce((a, b) => a + b)
      : 0;
  };

  return (
    <section className="my-5">
      <Header searching={searching} cart={cart.length} total={getTotal()} />
      <div className="flex">
        <Sidebar catSelection={catSelection} />
        <List
          search={search}
          category={category}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartIDs={cart.map((product) => product.id)}
        />
      </div>
    </section>
  );
};
