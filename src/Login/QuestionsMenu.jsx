import * as React from "react";
import './style.css'
class QuestionsMenu extends React.Component {
  render() {
    return (
      <div className="QuestionsMenu">
        <h1>Questions Menu</h1>
        <p>Regulation
        <select name="example">
            <option value="A">R13</option>
            <option value="B">R16</option>
          </select></p>
        <p>Branch
        <select name="example">
            <option value="A">CSE</option>
            <option value="B">IT</option>
          </select></p>
        <p>Year
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select></p>
        <p>Semester
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select></p>
        <p>Mid
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select></p>
        <p>Academic Year
        <select name="example">
            <option value="A">2016</option>
            <option value="B">2017</option>
          </select></p>
        <p>Subject
        <select name="example">
            <option value="A">R13101..</option>
            <option value="B">R13102..</option>
          </select></p>
        <button>Add Questions </button>
      </div>
    );
  }
}
export default QuestionsMenu;
