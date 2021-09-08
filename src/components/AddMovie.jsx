import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const {
      onClick,
    } = this.props;

    return (
      <form data-testid="add-movie-form">

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddMovie;
