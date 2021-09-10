import React from 'react';
import CustomControl from './CustomControl';

class AddMovie extends React.Component {
  formFields = [
    { name: 'title', type: 'text', labelText: 'Título' },
    { name: 'subtitle', type: 'text', labelText: 'Subtítulo' },
    { name: 'image', type: 'text', labelText: 'Imagem' },
    { name: 'storyline', type: 'storyline', labelText: 'Sinopse' },
    { name: 'rating', type: 'number', labelText: 'Avaliação' },
    // { name: 'genre', type: 'select', labelText: 'Gênero' },
  ]

  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
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
    const stateValues = Object.values(this.state);
    return (
      <form data-testid="add-movie-form">
        {this.formFields.map(({ name, ...otherFields }, index) => (
          <CustomControl
            key={ name }
            name={ name }
            value={ stateValues[index] }
            onChange={ this.handleChange }
            { ...otherFields }
          />
        ))}
      </form>
    );
  }
}

export default AddMovie;
