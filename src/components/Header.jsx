import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <h1>Alex Wyatt's Amazing Walrus ~ ITIS 3135</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/introduction">Introduction</Link>
          </li>
          <li>
            <Link to="/contract">Contract</Link>
          </li>
          <li>
            <Link to="/website-evaluations">Website Evaluations</Link>
          </li>
          <li>
            <Link to="/survey">Survey</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>

      {/* Secondary navigation (legacy / optional links from original site) */}
      <nav>
        <ul>
          {/* <li>
            <a href="stuff/where%40%20IsMy%20File.htm">Crappy Website</a>
          </li>

          <li>
            <a href="hobby/index.html">Hobby</a>
          </li>

          <li>
            <a href="intro_form.html">Intro Form</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
