import * as React from "react";
class QuestionsAdding extends React.Component {
  render() {
    return (
      <div className="QuestionsAdding">
        <h1>Questions Adding</h1>
        <h2>Unit
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select>
        </h2>
        <h2>Question
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select>
        </h2>
        <h2>Subject
        <select name="example">
            <option value="A">c</option>
            <option value="B">java</option>
          </select>
        </h2>
        <h2>Marks
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select>
        </h2>
        <h2>CO
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select>
        </h2>
        <h2>BL
        <select name="example">
            <option value="A">2016</option>
            <option value="B">2017</option>
          </select>
        </h2>
        <center>
          <button>Upload </button>
          <button>All Questions </button>
          <button>Save </button>
        </center>
      </div>
    );
  }
}
export default QuestionsAdding;
