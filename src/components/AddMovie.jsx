import React from 'react';
import CustomControl from './CustomControl';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      storyline: '',
      imagePath: '',
      // rating: 0,
      // genre: '',
    };
  }

  handleChange = ({ target }) => {
    let { name } = target;
    // TOC: Isso aqui me dá TOC! Arranjar maneira melhor de resolver!
    if (name === 'image') { name = 'imagePath'; }

    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <CustomControl
          name="title"
          type="text"
          labelText="Título"
          value={ title }
          onChange={ this.handleChange }
        />
        <CustomControl
          name="subtitle"
          type="text"
          labelText="Subtítulo"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <CustomControl
          name="image"
          type="text"
          labelText="Imagem"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <CustomControl
          name="storyline"
          type="textarea"
          labelText="Sinopse"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
