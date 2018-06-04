import React from 'react';
import { Component } from 'react';


import { connect } from 'react-redux';

class AddQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      option1: '',
      option2: '',
      option2: '',
      option2: '',
      correct_answer: 0,
    };
    this.onChange = this.onChange.bind(this);
}

onChange(event) {
  this.setState(
      {
          [event.target.name]: event.target.value
      }
  );
}

    render() {
        return (
          <form >
          <h1 className = "login-class">Add Question</h1>
          <div className="form-group">
              <label className="control-label">
                  Question
              </label>
              <input
                  type="text"
                  name="question"
                  className="form-control"
                  required
                  minLength = "6"
                  maxLength = "50"
              />
          </div>

          <div className="form-group">
              <label className="control-label">
                  Option 1
              </label>
              <input
                  type="text"
                  name="option1"
                  className="form-control"
                  required
                  minLength = "2"
                  maxLength = "10"
              />
          </div>

           <div className="form-group">
              <label className="control-label">
                  Option 2
              </label>
              <input
                  type="text"
                  name="option2"
                  className="form-control"
                  required
                  minLength = "2"
                  maxLength = "10"
              />
          </div>

           <div className="form-group">
              <label className="control-label">
                  Option 3
              </label>
              <input
                  type="text"
                  name="option3"
                  className="form-control"
                  required
                  minLength = "2"
                  maxLength = "10"
              />
          </div>

           <div className="form-group">
              <label className="control-label">
                  Option 4
              </label>
              <input
                  type="text"
                  name="option4"
                  className="form-control"
                  required
                  minLength = "2"
                  maxLength = "10"
              />
          </div>

           <div className="form-group">
              <label className="control-label">
                  Correct Answer
              </label>
              <input
                  type="number"
                  name="correct_answer"
                  className="form-control"
                  required
              />
          </div>



          <div className="form-group">
              <button className="btn btn-primary btn-lg" type="submit">
                  Submit
              </button>
          </div>
      </form>
        );
    }
}





export default connect(null, { })(AddQuestion);
