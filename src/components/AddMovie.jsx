import React from 'react';
import Input from './Input';
import Select from './Select';
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
          <Select genre={ genre } onChange={ this.onChange } />

        </form>
      </div>
    );
  }
}

export default AddMovie;
