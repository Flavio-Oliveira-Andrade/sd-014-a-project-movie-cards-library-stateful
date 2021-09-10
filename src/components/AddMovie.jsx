import React from 'react';
import PropTypes from 'prop-types';
import CustomControl from './CustomControl';

class AddMovie extends React.Component {
  formFields = [
    { name: 'title', type: 'text', labelText: 'Título' },
    { name: 'subtitle', type: 'text', labelText: 'Subtítulo' },
    { name: 'image', type: 'text', labelText: 'Imagem' },
    { name: 'storyline', type: 'textarea', labelText: 'Sinopse' },
    { name: 'rating', type: 'number', labelText: 'Avaliação' },
    {
      name: 'genre',
      type: 'select',
      labelText: 'Gênero',
      options: {
        Ação: 'action',
        Comédia: 'comedy',
        Suspense: 'thriller',
      },
    },
  ]

  initialState = {
    title: '',
    subtitle: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  }

  constructor() {
    super();
    this.state = this.initialState;
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

  handleAddMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.initialState);
  }

  render() {
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
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleAddMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
