import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      // trocado o nome da chave de imagePath pra image.
      image: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, image, storyline, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Input
            nome="title"
            textLabel="Título"
            value={ title }
            onChange={ this.onChange }
          />
          <Input
            nome="subtitle"
            textLabel="Subtítulo"
            value={ subtitle }
            onChange={ this.onChange }
          />
          <Input
            nome="image"
            textLabel="Imagem"
            value={ image }
            onChange={ this.onChange }
          />
          <label
            data-testid="storyline-input-label"
            htmlFor="storyline"
          >
            Sinopse
            <textarea
              id="storyline"
              data-testid="storyline-input"
              name="storyline"
              value={ storyline }
              onChange={ this.onChange }
            />
          </label>
          <Input
            type="number"
            nome="rating"
            textLabel="Avaliação"
            value={ rating }
            onChange={ this.onChange }
          />
        </form>
      </div>
    );
  }
}

export default AddMovie;
