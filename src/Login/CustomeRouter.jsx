import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import MainMenu from "./MainMenu.jsx";
import GeneratePaper from "./GeneratePaper.jsx";
import RegulationAdding from "./RegulationAdding.jsx";
import QuestionsMenu from "./QuestionsMenu.jsx";
import QuestionsAdding from "./QuestionsAdding.jsx";
export function CustomeRouter() {
  return (
    <div>
      <Route path="/links/mainmenu" component={MainMenu} />
      <Route path="/links/generatepaper" component={GeneratePaper} />
      <Route path="/links/regulationadding" component={RegulationAdding} />
      <Route path="/links/questionsmenu" component={QuestionsMenu} />
      <Route path="/links/questionsadding" component={QuestionsAdding} />
    </div>
  );
}
