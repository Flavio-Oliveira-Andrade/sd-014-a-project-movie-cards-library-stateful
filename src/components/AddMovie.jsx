import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    // const { onClick } = this.props;
    const {
    //   subtitle,
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
          <label
            data-testid="title-input-label"
            htmlFor="231"
          >
            Título
            <input
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ this.onChange }
            />
          </label>
        </form>
      </div>

    );
  }
}

export default AddMovie;
