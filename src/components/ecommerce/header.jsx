import { useState } from "react";

export const Header = (props) => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    const value = event.target.value;
    setSearch(value);
    props.searching(value);
  };

  return (
    <header>
      <img src="" alt="React ecommerce" />
      <form>
        <input
          value={search}
          onChange={changing}
          type="text"
          placeholder="Search..."
        />
      </form>
    </header>
  );
};
