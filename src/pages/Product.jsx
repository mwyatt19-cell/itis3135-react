import { useEffect } from "react";

import heroImage from "../assets/hero.png";
import "./Product.css";

export default function Product() {
  useEffect(() => {
    document.title =
      "Adventurous Walrus Summer Camps ~ ITIS 3135 ~ Product Page";
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="product-page">
      <header id="header">
        <img id="header-img" src={heroImage} alt="walrus logo" />

        <nav id="nav-bar">
          <ul>
            <li>
              <a className="nav-link" href="#page1">
                Introduction
              </a>
            </li>
            <li>
              <a className="nav-link" href="#page2">
                Contact-Us
              </a>
            </li>
            <li>
              <a className="nav-link" href="#page3">
                Upcoming Offerings
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="page1">
        <h1>Adventurous Walrus Summer Camps</h1>

        <iframe
          src="https://www.youtube.com/embed/8adtdg0N2-g"
          name="Ocean-Video"
          title="Ocean Animals for Kids | Learn all about the Animals and Plants that Live in the Ocean"
          id="video"
        ></iframe>

        <h2>Introduction</h2>
        <p>
          Welcome to Adventurous Walrus Summer Camps! This is a great way for
          your child to learn about the wonders of the deep sea. From trips to
          Kitty Hawk, to "make your own submarine" activities, your kid will
          have a great creative outlet and way to learn about the great big sea.
        </p>
      </section>

      <section id="page2">
        <form id="form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <p>
            Interested in our programs? Enter your email below and one of our
            counselors will reach out.
          </p>

          <label htmlFor="email">Enter your email here:</label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />

          <input id="submit" type="submit" />
        </form>
      </section>

      <section id="page3">
        <h2>Upcoming Offerings</h2>

        <p>
          In addition to summer camps, we are pleased to offer camps for Winter
          Break, Spring Break, and Field Trip options.
        </p>
      </section>
    </main>
  );
}
