import { useEffect } from "react";

export default function Introduction() {
  useEffect(() => {
    document.title = "Alex Wyatt's Amazing Walrus ~ ITIS 3135 ~ Introduction";
  }, []);

  return (
    <section>
      <h2>Introduction</h2>
      <p>
        Welcome to my ITIS 3135 course website. This is an introduction page.
      </p>
    </section>
  );
}
