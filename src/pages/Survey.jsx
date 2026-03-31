import { useEffect } from "react";
import "./Home.css";
export default function Survey() {
  useEffect(() => {
    document.title = "Contact Form ~ ITIS 3135 ~ Adventurous Walrus";
  }, []);

  return (
    <main>
      <h1 id="title">Contact Form</h1>

      <p id="description">
        Feel free to add your email to ask any ocean-related questions, or to
        receive updates whenever our site is updated!
      </p>

      <form id="survey-form">
        {/* NAME */}
        <label htmlFor="name" id="name-label">
          Enter your name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane M Doe"
          required
        />

        {/* EMAIL */}
        <label htmlFor="email" id="email-label">
          Enter your email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
        />

        {/* PHONE */}
        <label htmlFor="number" id="number-label">
          Enter your phone number:
        </label>
        <input
          id="number"
          name="phone"
          type="tel"
          placeholder="1234567890"
          min="0"
          max="9999999999"
          required
        />

        {/* DROPDOWN */}
        <label htmlFor="dropdown">Email list preference:</label>

        <select id="dropdown" name="emailPreference">
          <option value="yes">Yes, join email list</option>
          <option value="no">No, don't join email list</option>
        </select>

        {/* RADIO GROUP */}
        <fieldset>
          <legend>
            Interested in receiving mail about ongoing beach cleanup programs
            throughout the USA?
          </legend>

          <label htmlFor="of-course">Of Course</label>
          <input
            id="of-course"
            type="radio"
            name="cleanup-interest"
            value="ofCourse"
          />

          <label htmlFor="no-way">No Way</label>
          <input
            id="no-way"
            type="radio"
            name="cleanup-interest"
            value="noWay"
          />
        </fieldset>

        {/* CHECKBOX + TEXTAREA */}
        <fieldset>
          <legend>
            Would you like information on coral-safe sunscreen brands?
          </legend>

          <label htmlFor="yes-please">Yes please</label>
          <input
            id="yes-please"
            type="checkbox"
            name="sunscreen-info"
            value="yes"
          />

          <label htmlFor="no-thanks">No thanks</label>
          <input
            id="no-thanks"
            type="checkbox"
            name="sunscreen-info"
            value="no"
          />

          <label htmlFor="comments">Additional comments:</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            placeholder="Ask us anything..."
          />
        </fieldset>

        {/* SUBMIT */}
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
