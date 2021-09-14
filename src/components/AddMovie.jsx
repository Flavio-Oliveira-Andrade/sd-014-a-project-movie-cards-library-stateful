import React from 'react';
import InputTitle from './InputTitle';
// import PropTypes from 'prop-types';
// import Button from './Button';
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
