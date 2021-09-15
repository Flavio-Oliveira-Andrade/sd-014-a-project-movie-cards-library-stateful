import React from 'react';
import Subtitle from './Subtitle';
import Title from './Title';
import ImagePath from './ImagePath';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Title value={ title } onChange={ this.handleChange } />
          <ImagePath value={ imagePath } onChange={ this.handleChange } />
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <input
              data-testid="storyline-input"
              name="storyline"
              type="text"
              value={ storyline }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input
              data-testid="rating-input"
              name="rating"
              type="number"
              value={ rating }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="genre">
            <input
              id="genre"
              name="genre"
              type="string"
              value={ genre }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
