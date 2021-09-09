import React from 'react';
import CustomControl from './CustomControl';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      // story: '',
      // imagePath: '',
      // rating: 0,
      // genre: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, image } = this.state;
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
          value={ image }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
