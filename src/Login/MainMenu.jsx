import * as React from "react";
class MainMenu extends React.Component {
  render() {
    return (
      <div className="MainMenu">
        <h1>Question Papaer Generator</h1>
        <button>Question Papaer Generator</button>
        <button>Add Regulation</button>
        <button>Create New User</button>
        <button>Delete User</button>
        <button>Reset Password</button>
        <button>Logout</button>
      </div>
    );
  }
}

export default MainMenu;
