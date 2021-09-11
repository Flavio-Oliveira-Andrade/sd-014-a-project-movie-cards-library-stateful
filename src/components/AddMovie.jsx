// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange=({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="subtitle">
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ onClick }>texto</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,

};

export default AddMovie;
