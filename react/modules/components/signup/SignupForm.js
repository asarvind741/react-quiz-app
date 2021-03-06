import React from 'react';
import { PropTypes } from 'react';
import axios from 'axios';
import { Card, CardTitle } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Signup.css';
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmpassword: '',
            errors: {},
            isLoading: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    onSubmit(event) {
        event.preventDefault();
        // axios.post('api/users', {user:this.state});
        console.log(this.props.userSignupRequest)
        if(this.state.password === this.state.confirmpassword){
        this.props.userSignupRequest(this.state)
            .then((response) => {
                console.log("res----------", response);
                if(response.status == 200){
                this.props.addFlashMessage({
                    type: 'success',
                    text: `You signed up successfully. Welcome ${this.state.firstname}`
                });
                this.context.router.push('/login')
            }
            else {
                //this.props.addUser(this.state);
                this.props.addFlashMessage({
                    type: 'error',
                    text: response.statusText
                })
                this.context.router.push('/register')
                // this.setState({ errors: err.response.data, isLoading: false })
            }
            });
        }
        else {
            this.props.addFlashMessage({
                type: 'info',
                text: 'Your Password does not match with Confirm Password. Please Try Again!'
            })
            this.context.router.push('/signup')
        }

    }
    render() {

        return (
            <MuiThemeProvider>
            <Card className="container signup-container">
            <form onSubmit={this.onSubmit} className = "form-signup">
                <h1 className = "login-class">Join Our Community</h1>
                <div className="form-group">
                    <label className="control-label">
                        First Name:
                    </label>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        name="firstName"
                        className="form-control signup-formcontrol"
                        required
                        minLength = "4"
                        maxLength = "10"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        name="lastName"
                        className="form-control"
                        required
                        minLength = "2"
                        maxLength = "10"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">
                        E-Mail:
                    </label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        value={this.state.confirmpassword}
                        onChange={this.onChange}
                        name="confirmpassword"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg" type="submit">
                        Submit
                    </button>
                </div>
            </form>
            </Card>
            </MuiThemeProvider> 
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    addUser:React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default SignupForm;