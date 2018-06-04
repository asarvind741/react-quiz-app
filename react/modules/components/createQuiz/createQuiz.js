import React from 'react';
import { Component } from 'react';


import { connect } from 'react-redux';
import AddQuestion  from '../add-Questions/add-Questions'
class CreateQuiz extends Component {
    render() {
        return (
          <div>
         <h1>Create a Quiz</h1>
         <form >
          <div className="form-group">
              <label className="control-label">
                  Quiz Name
              </label>
              <input
                  type="text"
                  name="quizname"
                  className="form-control"
                  required
                  minLength = "6"
                  maxLength = "20"
              />
          </div>
          <div className="form-group">
              <button className="btn btn-primary btn-lg" type="submit">
                  Submit
              </button>
          </div>
          </form>
         <AddQuestion />
         </div>
        );
    }
}





export default CreateQuiz;
