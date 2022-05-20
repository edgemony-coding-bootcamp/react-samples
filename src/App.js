import { CommentsWidget } from "./components/comments/widget";
import { WeatherWidget } from "./components/weather/widget";
import { Ecommerce } from "./components/ecommerce";
import { Login } from "./components/login";
import { Tailwind } from "./components/tailwind";
import { Square } from "./components/animations/square";

import "./App.css";
import "./styles/square.css";

function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold my-3">
        Collection of React samples by Edgemony!
      </h1>
      <hr />
      <Login />
      <hr />
      <Tailwind />
      <hr />
      <CommentsWidget />
      <hr />
      <h2 className="text-2xl font-bold my-2">
        CSS Transitions: moving square
      </h2>
      <Square />
      <hr />
      <WeatherWidget />
      <hr />
      <Ecommerce />
    </main>
  );
}

export default App;
