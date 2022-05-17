import { useState } from "react";

/**
 * Clicco su un elemento e alterno l'assegnazione di una classe CSS
 * che causa una transizione
 */
export const Square = () => {
  const [isSelected, setSelected] = useState(false);

  const selection = () => setSelected(!isSelected);
  const applyStyles = () => ["square", isSelected ? "selected" : ""].join(" ");

  return <div className={applyStyles()} onClick={selection}></div>;
};
