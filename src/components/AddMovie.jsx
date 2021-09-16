import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

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
      genre: 'action',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, image, storyline, rating, genre } = this.state;
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
          <TextArea storyline={ storyline } onChange={ this.onChange } />
          <Input
            type="number"
            nome="rating"
            textLabel="Avaliação"
            value={ rating }
            onChange={ this.onChange }
          />
          <label htmlFor="select" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              id="select"
              value={ genre }
              onChange={ this.onChange }
              data-testid="genre-input"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
