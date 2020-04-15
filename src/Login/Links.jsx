import React from "react";
import { Link } from "react-router-dom";
function Links() {
  return (
    <div className="links">
      <Link to="/mainmenu">MainMain</Link> <br />
      <Link to="/generatepaper">GeneratePaper</Link> <br />
      <Link to="/regulationadding">RegulationAdding</Link> <br />
      <Link to="/questionsmenu">QuestionsMenu</Link> <br />
      <Link to="/questionsadding">QuestionsAdding</Link> <br />
    </div>
  );
}
export default Links;