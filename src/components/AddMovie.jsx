// implement AddMovie component here
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

    this.aE = this.aE.bind(this);
  }

  aE(event) {
    const { value } = event.target;
    this.setState({
      title: value,
    });
  }

  render() {
    //  const { onClick } = this.props;
    const { title: t } = this.state;
    const ti = 'title-input';

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="t" data-testid="title-input-label">
          Título
          <input type="text" id="t" data-testid={ ti } value={ t } onChange={ this.aE } />
        </label>
      </form>
    );
  }
}

/*  AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};  */

export default AddMovie;
