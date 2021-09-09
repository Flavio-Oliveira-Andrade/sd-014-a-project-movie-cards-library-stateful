import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeStoryline = this.handleChangeStoryline.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeGenero = this.handleChangeGenero.bind(this)
  }
  
  // handleChange ( { target } ) {
  //   const {value, name} = target
  //   this.setState({ 
  //     [name] : value
  //   })
  // }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeSubtitle(event) {
    this.setState({ subtitle: event.target.value })
  }

  handleChangeImage(event) {
    this.setState({ imagePath: event.target.value })
  }

  handleChangeStoryline(event) {
    this.setState({ storyline: event.target.value })
  }

  handleChangeRating(event) {
    this.setState({ rating: event.target.value })
  }

  handleChangeGenero(event) {
    this.setState({ genre: event.target.value })
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">Título</label>
          <input type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChangeTitle } />

          <label data-testid="subtitle-input-label">Subtítulo</label>
          <input type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChangeSubtitle } />

          <label htmlFor="" data-testid="image-input-label">Imagem</label>
          <input type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChangeImage } 
          />

          <label 
            htmlFor=""
            data-testid="storyline-input-label"
          >
              Sinopse
            <textarea
              data-testid="storyline-input"
              cols="30"
              rows="10"
              value={ storyline }
              onChange={ this.handleChangeStoryline }>
            </textarea>
          </label>
          
          <label htmlFor="" data-testid="rating-input-label">Avaliação</label>
          <input type="number" value={ rating } data-testid="rating-input" onChange={ this.handleChangeRating } />

          <label htmlFor="" data-testid="genre-input-label">Gênero</label>
          <select name="" id="" value={genre} data-testid="genre-input" onChange={ this.handleChangeGenero }></select>
        </form>
      </div>
    )
  }
}

export default AddMovie;
