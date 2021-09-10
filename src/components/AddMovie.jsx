import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.createInput = this.createInput.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    const name = target.name === 'image' ? 'imagePath' : target.name;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    this.setState((state) => {
      onClick(state);
      return {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      };
    });
  }

  createInput({ label, type, name, value }) {
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}-input` }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          data-testid={ `${name}-input` }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createInput({
          label: 'Título', type: 'text', name: 'title', value: title }) }
        { this.createInput({
          label: 'Subtítulo', type: 'text', name: 'subtitle', value: subtitle }) }
        { this.createInput({
          label: 'Imagem', type: 'text', name: 'image', value: imagePath }) }
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            name="storyline"
          />
        </label>
        { this.createInput({
          label: 'Avaliação', type: 'number', name: 'rating', value: rating }) }
        <label data-testid="genre-input-label" htmlFor="genre-input">
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
