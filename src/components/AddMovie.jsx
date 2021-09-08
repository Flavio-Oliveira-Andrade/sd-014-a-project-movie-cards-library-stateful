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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      onClick,
    } = this.props;

    const {
      subtitle,
      title,
      imagePath,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            value={ title }
            data-testid="title-input"
            name="title"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input 
            value={ subtitle }
            data-testid="subtitle-input"
            name="subtitle"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddMovie;
