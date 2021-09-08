import React from 'react';

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

  handleChange({ target }) { // / desestrutura 'event.target' para 'target'
    const { name } = target; // acessa 'name' de 'value' (pega todos os names, ex 'title')
    const value = target.type === 'checkbox' ? target.checked : target.value; // para checkbox o bolleano de retorno não fica em 'value', mas sim em 'checkbox'

    this.setState({
      [name]: value,
    });
  }

  // handleClick() {
  //   const { onClick } = this.props;
  // }

  render() {
    return (
      <form data-testid="add-movie-form">

        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            id="title"
            data-testid="title-input"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            id="subtitle"
            data-testid="subtitle-input"
            value={ this.state.subtitle }
            onChange={ this.handleChange }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
