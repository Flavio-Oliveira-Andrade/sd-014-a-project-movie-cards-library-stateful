import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Title from './Title';
import ImagePath from './ImagePath';

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
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    const { onClick } = this.props;

    return (
      <div>
        <form>
          <Subtitle subtitle={ subtitle } />
          <Title title={ title } />
          <ImagePath imagePath={ imagePath } />
          <label htmlFor="storyline">
            <input
              id="storyline"
              name="storyline"
              type="text"
              value={ storyline }
              onChange={ onClick }
            />
          </label>
          <label htmlFor="rating">
            <input
              id="rating"
              name="rating"
              type="number"
              value={ rating }
              onChange={ onClick }
            />
          </label>
          <label htmlFor="genre">
            <input
              id="genre"
              name="genre"
              type="string"
              value={ genre }
              onChange={ onClick }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
