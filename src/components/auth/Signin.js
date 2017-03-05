import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({email, password}) {
    console.log('hello', email, password);
  }

  render() {
    const {fields: {email, password}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" className="form-control" id="email" {...email}/>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" {...password}/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
