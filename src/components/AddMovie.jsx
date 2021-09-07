import React from 'react';
import Input from './Input';
import InputImg from './InputImg';
import InputNumber from './InputNumber';
import Select from './Select';
import Textarea from './Textarea';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          id={ `${'title'}` }
          value={ title }
          handleChange={ this.handleChange }
          titulo={ `${'Título'}` }
        />
        <Input
          id={ `${'subtitle'}` }
          value={ subtitle }
          handleChange={ this.handleChange }
          titulo={ `${'Subtítulo'}` }
        />
        <InputImg
          id={ `${'image'}` }
          src={ imagePath }
          handleChange={ this.handleChange }
          titulo={ `${'Imagem'}` }
        />
        <Textarea
          id={ `${'storyline'}` }
          value={ storyline }
          handleChange={ this.handleChange }
          titulo={ `${'Sinopse'}` }
        />
        <InputNumber
          id={ `${'rating'}` }
          value={ rating }
          handleChange={ this.handleChange }
          titulo={ `${'Avaliação'}` }
        />
        <Select
          id={ `${'genre'}` }
          value={ genre }
          handleChange={ this.handleChange }
          titulo={ `${'Gênero'}` }
        />
        <button type="submit" onClick={ this.handleClick } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
