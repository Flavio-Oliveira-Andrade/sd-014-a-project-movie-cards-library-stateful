import React from 'react';
import Input from './Input';
import InputNumber from './InputNumber';
import Textarea from './Textarea';

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
      genre: '',
    };
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onCLick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
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
        <Input
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
        
      </form>
    );
  }
}

export default AddMovie;
