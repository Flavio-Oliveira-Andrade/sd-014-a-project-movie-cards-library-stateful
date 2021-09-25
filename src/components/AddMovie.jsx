import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
   }

    this.titleHG = this.titleHG.bind(this);

    this.subtitleHG = this.subtitleHG.bind(this);

    this.searchImagePath = this.searchImagePath.bind(this);

    this.storylineChange = this.storylineChange.bind(this);

    this.ratingChange = this.ratingChange.bind(this);

    this.genreSelect = this.genreSelect.bind(this);
}

  titleHG(event) {
    this.setState({
      title: event.target.value,
     });
  }

  subtitleHG(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  searchImagePath(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  storylineChange(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  ratingChange(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  genreSelect(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { 
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return(
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="titulo" data-testid="title-input-label">
            Título
            <input
              name="titulo"
              data-testid="title-input"      
              type="text"
              value={ title }
              onChange={ this.titleHG }/>
          </label >
          <label htmlFor="subtitulo" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitulo"
              data-testid="subtitle-input"
              type="text"
              value={ subtitle }
              onChange={ this.subtitleHG }/>
          </label>
          <label htmlFor="cartaz" data-testid="image-input-label">
            Imagem
            <input
              name="cartaz"
              data-testid="image-input"
              type="text"
              value={ imagePath }
              onChange={ this.searchImagePath } />
          </label>
          <label htmlFor="sinopse" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="sinopse"
              data-testid="storyline-input"
              cols="25" 
              rows="1"
              value={ storyline }
              onChange={ this.storylineChange }/>
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
            name="rating" 
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ this.ratingChange }/>
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.genreSelect }>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default AddMovie;
