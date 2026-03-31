import { useEffect } from "react";
import "./home.css";

export default function Home() {
  useEffect(() => {
    document.title =
      "Alex Wyatt's Amazing Walrus ~ ITIS 3135 ~ Course Home Page";
  }, []);

  return (
    <>
      <main>
        <section>
          <h2>Course Home Page</h2>
        </section>
      </main>
    </>
  );
}
