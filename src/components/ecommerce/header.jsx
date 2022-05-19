import { useState } from "react";

export const Header = (props) => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    const value = event.target.value;
    setSearch(value);
    props.searching(value);
  };

  return (
    <header className="navbar text-primary-content">
      <img src="" alt="React ecommerce" />
      <form>
        <input
          className="input input-bordered"
          value={search}
          onChange={changing}
          type="text"
          placeholder="Search..."
        />
      </form>
      <div className="text-black">
        Carrello: <span>{props.cart}</span> - Totale: <span>{props.total}</span>
        €
      </div>
    </header>
  );
};
