//  implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

// 6 - Crie um componente chamado <AddMovie />
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
    this.handleChange = this.handleChange.bind(this);
  }

  // A propriedade onChange deve atualizar o estado de <AddMovie />, atribuindo a title o atual título contido no input.
  handleChange({ target }) {
    const { name } = target;
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valor,
    });
  }

  input(name, type, value, dataTestId) {
    return (
      <input
        name={ name }
        type={ type }
        value={ value }
        data-testid={ dataTestId }
        onChange={ this.handleChange }
      />
    );
  }

  render() {
    const { subtitle, storyline, rating, imagePath, genre, title } = this.state;
    //   7 - Renderize um formulário dentro de <AddMovie />
    return (
      <form data-testid="add-movie-form">
        {/* 8 - Renderize um input do tipo texto dentro do formulário em <AddMovie />  */}
        <label htmlFor="title" data-testid="title-input-label">
          Título
          {this.input('title', 'text', title, 'title-input')}
        </label>
        {/* 9 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> */}
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.input('subtitle', 'text', subtitle, 'subtitle-input')}
        </label>
        {/* 10 - Renderize um input do tipo texto dentro do formulário em <AddMovie /> */}
      </form>
    );
  }
}

export default AddMovie;
