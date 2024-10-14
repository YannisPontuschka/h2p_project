import "./index.css";
import h2plogo from "../../images/h2p.png";

function Header() {
  return (
    <header className="header-section">
      <img id="logo" src={h2plogo} alt="Logo" />
      <h1>How2Play</h1>
      <h2 id="slogan">Learn. Play. Win.</h2>
      <p id="description">
        A mais nova plataforma educacional de games do Brasil.
      </p>
    </header>
  );
}

export default Header;
