// implement AddMovie component here
import React from 'react';
import InputTextComp from './Inputs/InputTextComponent';
import TextAreaComp from './Inputs/TextAreaComponent';
import SelectComp from './Inputs/SelectComponent';
import InputNumberComp from './Inputs/InputNumberComponent';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);

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

  reset(event) {
    const { onClick } = this.props;
    console.log(onClick);
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const inputs = [
      { id: 'title', titulo: 'Título', value: title },
      { id: 'subtitle', titulo: 'Subtítulo', value: subtitle },
      { id: 'image', titulo: 'Imagem', value: imagePath },
    ];
    return (
      <form data-testid="add-movie-form">
        {inputs.map((comp) => (<InputTextComp
          key={ comp.id }
          id={ comp.id }
          titulo={ comp.titulo }
          value={ comp.value }
          callback={ this.handleChange }
        />))}
        <TextAreaComp
          id="storyline"
          titulo="Sinopse"
          value={ storyline }
          callback={ this.handleChange }
        />
        <InputNumberComp
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
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.reset }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
