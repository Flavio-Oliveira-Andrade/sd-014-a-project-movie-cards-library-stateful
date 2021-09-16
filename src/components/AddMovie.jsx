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
    const {
      subtitle,
      title,
    //   imagePath,
    //   storyline,
    //   rating,
    //   genre
    } = this.state;

    return (
      <div>
        <form
          data-testid="add-movie-form"
          action=""
        >
          <Input
            nome="title"
            description="Título"
            value={ title }
            onChange={ this.onChange }
          />
          <Input
            nome="subtitle"
            description="Subtítulo"
            value={ subtitle }
            onChange={ this.onChange }
          />
        </form>

      </div>

    );
  }
}

export default AddMovie;
