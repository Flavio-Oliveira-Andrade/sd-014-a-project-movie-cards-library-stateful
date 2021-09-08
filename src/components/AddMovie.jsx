import React from 'react';
import PropTypes from 'prop-types';

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
    };
  };

  render() {
    const {subtitle, title, imagePath, storyline, rating, genre} = this.state;
    return(
      <form>
        
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}
// func because it's got to be a callback OnClick
export default AddMovie;
