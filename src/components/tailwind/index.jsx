export const Tailwind = () => {
  const grid = [
    "bg-white",
    "text-black",
    "dark:bg-slate-900",
    "dark:text-white",
    "md:grid",
    "md:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-4",
    "gap-4",
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul className={grid.join(" ")}>
        <li className="bg-red-400 p-3">Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
        <li>Elemento 5</li>
        <li>Elemento 6</li>
      </ul>
    </div>
  );
};
