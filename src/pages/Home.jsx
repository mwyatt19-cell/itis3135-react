import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title =
      "Alex Wyatt's Amazing Walrus ~ ITIS 3135 ~ Course Home Page";
  }, []);

  return (
    <>
      <section>
        <h2>Course Home Page</h2>
      </section>
    </>
  );
}
