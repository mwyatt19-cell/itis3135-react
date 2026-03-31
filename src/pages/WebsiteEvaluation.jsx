export default function WebsiteEvaluations() {
  return (
    <>
      <h2>Website Evaluations</h2>

      {/* SITE 1 */}
      <section>
        <h3>
          <a
            href="https://schoolyourself.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SchoolYourself
          </a>
        </h3>

        <ul>
          <li>
            <strong>Contrast:</strong> This site has strong contrast in heading
            hierarchy, colors (especially green accents), and emphasis through
            typography.
          </li>
          <li>
            <strong>Repetition:</strong> Green and orange accents are used
            consistently, helping the layout feel unified and structured.
          </li>
          <li>
            <strong>Alignment:</strong> Content is well-aligned with no
            distracting spacing issues or misaligned elements.
          </li>
          <li>
            <strong>Proximity:</strong> Related content is grouped clearly,
            improving readability and structure.
          </li>
        </ul>
      </section>

      {/* SITE 2 */}
      <section>
        <h3>
          <a
            href="https://cookbooks.com/Recipe-Details.aspx?id=369"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookbooks.com
          </a>
        </h3>

        <ul>
          <li>
            <strong>Contrast:</strong> The site has inconsistent font sizes and
            colors, reducing readability.
          </li>
          <li>
            <strong>Repetition:</strong> Styling is inconsistent, with irregular
            capitalization and mixed visual patterns.
          </li>
          <li>
            <strong>Alignment:</strong> Layout feels cluttered and lacks a
            structured visual hierarchy.
          </li>
          <li>
            <strong>Proximity:</strong> Some related items are grouped, but
            navigation elements and actions are scattered.
          </li>
        </ul>
      </section>
    </>
  );
}
