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
      genre: 'action',
   }

    this.handleChange = this.handleChange.bind(this);
}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
     });
  }

  handleAdd = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
    // onClick( console.log('ok') );
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
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              name="title"
              data-testid="title-input"      
              type="text"
              value={ title }
              onChange={ this.handleChange }/>
          </label >
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              data-testid="subtitle-input"
              type="text"
              value={ subtitle }
              onChange={ this.handleChange }/>
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              name="imagePath"
              data-testid="image-input"
              type="text"
              value={ imagePath }
              onChange={ this.handleChange } />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              data-testid="storyline-input"
              cols="25" 
              rows="1"
              value={ storyline }
              onChange={ this.handleChange }/>
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
            name="rating" 
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ this.handleChange }/>
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }>
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            data-testid="send-button"
            onClick={ this.handleAdd }>
            Adicionar filme
          </button>
        </form>
      </div>
    )
  }
}

export default AddMovie;
