import React from 'react';
import FormularioParte1 from './FormularioPt-1';
import FormularioParte2 from './FormularioPt-2';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.atualizaEstado = this.atualizaEstado.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  atualizaEstado({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <FormularioParte1
          subtitleValue={ subtitle }
          titleValue={ title }
          imagePathValue={ imagePath }
          storyValue={ storyline }
          atualizaEstado={ this.atualizaEstado }
        />
        <FormularioParte2
          ratingValue={ rating }
          genreValue={ genre }
          atualizaEstado={ this.atualizaEstado }
        />
      </form>
    );
  }
}

export default AddMovie;
