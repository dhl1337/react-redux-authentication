import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="form-control" {...email}/>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="form-control" {...password}/>
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input type="password" id="passwordConfirm" className="form-control" {...passwordConfirm}/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match'
  }
  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, null, actions)(Signup);