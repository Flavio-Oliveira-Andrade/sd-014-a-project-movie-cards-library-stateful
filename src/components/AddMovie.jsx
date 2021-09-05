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
      genre: 'action'
    };

    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle({ target }) {
    this.setState({ title: target.value });
  }

  render() {
    const { onclick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título:
          <input
            type="text"
            name="title"
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleTitle }
          />
        </label>

      </form>
    );
  }
}

AddMovie.propTypes = { onclick: PropTypes.func };

AddMovie.defaultProps = { onclick: () => undefined };

export default AddMovie;
