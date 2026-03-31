import { useEffect } from "react";
import "./Home.css";
export default function Home() {
  useEffect(() => {
    document.title =
      "Alex Wyatt's Amazing Walrus ~ ITIS 3135 ~ Course Home Page";
  }, []);

  return (
    <main className="home-page">
      <section>
        <h2>Course Home Page</h2>
      </section>
    </main>
  );
}
