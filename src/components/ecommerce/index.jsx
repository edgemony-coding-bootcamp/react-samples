import { useState } from "react";

import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { List } from "./list";

export const Ecommerce = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("everything");

  const catSelection = (value) => {
    // console.log(value);
    setCategory(value);
  };

  const searching = (value) => {
    // console.log(value);
    setSearch(value);
  };

  return (
    <main>
      <Header searching={searching} />
      <div className="flex">
        <Sidebar catSelection={catSelection} />
        <List search={search} category={category} />
      </div>
    </main>
  );
};
