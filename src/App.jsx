import logo from "./images/logo.svg";

import "./styles/normalize.css";
import "./styles/main.css";
import "./styles/fontawesome.min.css";


function App() {
  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} class="responsive" alt="" />
      </div>
      <select className="home__select-users">
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>
      <button className="button-primary">Entrar</button>
    </div>
  );
}

export default App;