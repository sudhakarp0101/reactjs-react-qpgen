import * as React from "react";
class GeneratePaper extends React.Component {
  render() {
    return (
      <div className="GeneratePaper">
        <h1>Generate Paper</h1>
        <h2>Branch
        <select name="example">
            <option value="A">CSE</option>
            <option value="B">IT</option>
          </select></h2>
        <h2>Year
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select></h2>
        <h2>Semester
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select></h2>
        <h2>Mid
        <select name="example">
            <option value="A">1</option>
            <option value="B">2</option>
          </select></h2>
        <h2>Academic Year
        <select name="example">
            <option value="A">2016</option>
            <option value="B">2017</option>
          </select></h2>
        <h2>Subject
        <select name="example">
            <option value="A">R13101..</option>
            <option value="B">R13102..</option>
          </select></h2>
        <button>Generate Question Paper</button>
      </div>
    );
  }
}
export default GeneratePaper;
