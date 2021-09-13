import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputSubtitle: '',
      inputTitle: '',
      // inputImagePath: '',
      // inputStoryline: '',
      // inputRating: 0,
      // inputGenre: 'action',
    };
  }

  handleChange({ target }) { // desestruturação do event para não precisar escrever event.target
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; // necessário para conseguir pegar o valor do checkbox, se for checkbox pega o checked e se não for pega o value
    this.setState({ [name]: value }); // interpolando o valor da variável para ser o nome da chave do objeto
  }

  render() {
    const { inputSubtitle, inputTitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputTitle">
          Título
          <input
            type="text"
            name="inputTitle"
            id="inputTitle"
            data-testid="title-input"
            value={ inputTitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="inputSubtitle">
          Subtítulo
          <input
            type="text"
            name="inputSubtitle"
            id="inputSubtitle"
            data-testid="subtitle-input"
            value={ inputSubtitle }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
