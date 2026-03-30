import { useEffect } from "react";
import "./inventory.css";

export default function Inventory() {
  useEffect(() => {
    document.title =
      "Alex Wyatt's Adventurous Walrus ~ ITIS 3135 ~ Book Inventory";
  }, []);

  return (
    <main>
      <h1>Book Inventory</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Rate</th>
          </tr>
        </thead>

        <tbody>
          <tr className="read">
            <td>The Old Man and the Sea</td>
            <td>Ernest Hemingway</td>
            <td>Fiction</td>
            <td>
              <span className="status">Read</span>
            </td>
            <td>
              <span className="rate three">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </td>
          </tr>

          <tr className="read">
            <td>Twenty Thousand Leagues Under the Sea</td>
            <td>Jules Verne</td>
            <td>Fiction</td>
            <td>
              <span className="status">Read</span>
            </td>
            <td>
              <span className="rate two">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </td>
          </tr>

          <tr className="in-progress">
            <td>438 Days: An Extraordinary True Story of Survival at Sea</td>
            <td>Jonathan Franklin</td>
            <td>Non-Fiction</td>
            <td>
              <span className="status">In Progress</span>
            </td>
            <td>
              <span className="rate">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </td>
          </tr>

          <tr className="read">
            <td>Jaws</td>
            <td>Peter Benchley</td>
            <td>Fiction</td>
            <td>
              <span className="status">Read</span>
            </td>
            <td>
              <span className="rate one">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </td>
          </tr>

          <tr className="to-read">
            <td>The Book Of Tides</td>
            <td>William Thomson</td>
            <td>Non-Fiction</td>
            <td>
              <span className="status">To Read</span>
            </td>
            <td>
              <span className="rate">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
