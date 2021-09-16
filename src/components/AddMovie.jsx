import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline } = this.state;
    return (
      <div>
        <form
          data-testid="add-movie-form"
          action=""
        >
          <Input
            nome="title"
            textLabel="Título"
            value={ title }
            onChange={ this.onChange }
          />
          <Input
            nome="subtitle"
            textLabel="Subtítulo"
            value={ subtitle }
            onChange={ this.onChange }
          />
          <Input
            nome="image"
            textLabel="Imagem"
            value={ imagePath }
            onChange={ this.onChange }
          />
          <label
            data-testid="storyline-input-label"
            htmlFor="storyline"
          >
            Sinopse
            <textarea
              id="storyline"
              data-testid="storyline-input"
              name="storyline"
              value={ storyline }
              onChange={ this.onChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
