// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
          <label data-testid="title-input-label" htmlFor>
            Título
            <input
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange }
              name="title"
            />
          </label>
          <label
            data-testid="subtitle-input-label"
            htmlFor
          >
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChange }
              name="subtitle"
            />
          </label>
          <label
            data-testid="image-input-label"
            htmlFor
          >
            Imagem
            <input
              type="text"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChange }
              name="imagePath"
            />
          </label>

        </form>
      </div>

    );
  }
}

export default AddMovie;
