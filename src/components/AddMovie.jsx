// implement AddMovie component here
import React from 'react';
import InputComp from './Inputs/InputComponnet';
import TextAreaComp from './Inputs/TextAreaComponent';
import SelectComp from './Inputs/SelectComponent';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { id } = target;
    const value = id === 'rating' ? Number(target.value) : target.value;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputComp
          type="text"
          id="title"
          titulo="Título"
          value={ title }
          callback={ this.handleChange }
        />
        <InputComp
          type="text"
          id="subtitle"
          titulo="Subtítulo"
          value={ subtitle }
          callback={ this.handleChange }
        />
        <InputComp
          type="text"
          id="image"
          titulo="Imagem"
          value={ imagePath }
          callback={ this.handleChange }
        />
        <TextAreaComp
          id="storyline"
          titulo="Sinopse"
          value={ storyline }
          callback={ this.handleChange }
        />
        <InputComp
          type="number"
          id="rating"
          titulo="Avaliação"
          value={ rating }
          callback={ this.handleChange }
        />
        <SelectComp
          id="genre"
          titulo="Gênero"
          value={ genre }
          callback={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
