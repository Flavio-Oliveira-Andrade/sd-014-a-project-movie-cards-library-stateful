import React from 'react';
import FormularioParte1 from './FormularioPt-1';
import FormularioParte2 from './FormularioPt-2';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.atualizaEstado = this.atualizaEstado.bind(this);
    this.addNovoFilme = this.addNovoFilme.bind(this);

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

  addNovoFilme(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addNovoFilme }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
