import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const {
      title,
      subtitle,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="input-title"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            id="input-title"
            name="title"
            value={ title }
            onChange={ this.handleOnChange }
            data-testid="title-input"
          />
        </label>
        <label
          htmlFor="input-subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            id="input-subtitle"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleOnChange }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onclick: PropTypes.func.isRequired,
// };

export default AddMovie;
