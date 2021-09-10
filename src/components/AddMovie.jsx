import React from 'react';
import DataS from './DataS';
import Sel from './Sel';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.createInput = this.createInput.bind(this);
  }

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handleSubtitle= (event) => {
    this.setState({ subtitle: event.target.value });
  }

  handleImage = (event) => {
    this.setState({ imagePath: event.target.value });
  }

  handleSt = (event) => {
    this.setState({ storyline: event.target.value });
  }

  handleRating = (event) => {
    this.setState({ rating: event.target.value });
  }

  handleGenreChange = (event) => {
    this.setState({ genre: event.target.value });
  }

  createInput({ desc, type, name, value, callback }) {
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        { desc }
        <input
          type={ type }
          name={ name }
          value={ value }
          data-testid={ `${name}-input` }
          onChange={ callback }
        />
      </label>
    );
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {this.createInput({
          desc: 'Título',
          type: 'text',
          name: 'title',
          value: title,
          callback: this.handleTitle })}
        {this.createInput({
          desc: 'Subtítulo',
          type: 'text',
          name: 'subtitle',
          value: subtitle,
          callback: this.handleSubtitle })}
        {this.createInput({
          desc: 'Imagem',
          type: 'text',
          name: 'image',
          value: imagePath,
          callback: this.handleImage })}
        {this.createInput({
          desc: 'Sinopse',
          type: 'textarea',
          name: 'storyline',
          value: storyline,
          callback: this.handleSt })}
        {this.createInput({
          desc: 'Avaliação',
          type: 'number',
          name: 'rating',
          value: rating,
          callback: this.handleRating })}
        <Sel DataS={ DataS } val={ genre } change={ this.handleGenreChange } />
        <button type="submit" data-testid="send-button" onClick={ onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
