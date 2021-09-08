import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return(
      <form>
        wfghjmk,
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}
// func because it's got to be a callback OnClick .
export default AddMovie;
