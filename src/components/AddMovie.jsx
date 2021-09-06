import React from 'react';
import PropTypes from 'prop-types';

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
    const { eventListener } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <div>
        <p>{ subtitle }</p>
        <p>{ title }</p>
        <p>{ imagePath }</p>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <p>{ genre }</p>
        <p>{ eventListener }</p>
      </div>
    );
  }
}

AddMovie.defaultProps = {
  eventListener: '',
};

AddMovie.propTypes = {
  eventListener: PropTypes.func,
};

export default AddMovie;
