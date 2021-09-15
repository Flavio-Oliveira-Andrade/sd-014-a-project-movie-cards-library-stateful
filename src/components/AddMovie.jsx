import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  // https://pt-br.reactjs.org/docs/react-component.html#constructor
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
    // referencia do bind: https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined?rq=1
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleChangeImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleChangeStoryline(event) {
    this.setState({ storyline: event.target.value });
    console.log(event.target.value);
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              value={ title }
              onChange={ this.handleChangeTitle }
            />
          </label>

          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChangeSubtitle }
            />
          </label>

          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChangeImage }
            />
          </label>

          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.handleChangeStoryline }
              cols="30"
              rows="10"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;
