import React from 'react';
import Input from './Input';

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
    const { title, subtitle, imagePath } = this.state;
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
      </form>
    );
  }
}

export default AddMovie;
