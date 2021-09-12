// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import SubTitulo from './Subtitulo';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
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
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo value={ title } handleChange={ this.handleChange } />
        <SubTitulo value={ subtitle } handleChange={ this.handleChange } />
        <button type="button" onClick={ onClick }>texto</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,

};

export default AddMovie;
