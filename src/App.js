import React from "react";
import TextField from "@material-ui/core/TextField";
import Login from "./Login/Login.jsx";
import MainMenu from "./Login/MainMenu.jsx";
import GeneratePaper from "./Login/GeneratePaper.jsx";
import RegulationAdding from "./Login/RegulationAdding.jsx";
import QuestionsMenu from "./Login/QuestionsMenu.jsx";
import QuestionsAdding from "./Login/QuestionsAdding.jsx";
import Links from "./Login/Links";
import { CustomeRouter } from "./Login/CustomeRouter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { browserHistory, IndexRoute } from 'react-dom'
import { isLogicalExpression } from "@babel/types";
import MyHeader from './Login/MyHeader'
import Protected from './Login/Protected'
import CreateUser from './Login/CreateUser'
import AllUsers from './Login/AllUsers'
import DeleteUser from './Login/DeleteUser'
import UpdateUser from './Login/UpdateUser'

class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory} className="Links">
        <div className="App">
          <MyHeader />
          <Switch>
            <Route path="/generatepaper" >
              <Protected cmp={GeneratePaper} />
            </Route>
            <Route path="/regulationadding">
              <Protected cmp={RegulationAdding} />
            </Route>
            <Route path="/QuestionsMenu">
              <Protected cmp={QuestionsAdding} />
            </Route>
            <Route path="/createUser">
              <Protected cmp={CreateUser} />
            </Route>
            <Route path="/allusers">
              <Protected cmp={AllUsers} />
            </Route>
            <Route path="/deleteUser">
              <Protected cmp={DeleteUser} />
            </Route>
            <Route path="/updateUser">
              <Protected cmp={UpdateUser} />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}
export default App;
