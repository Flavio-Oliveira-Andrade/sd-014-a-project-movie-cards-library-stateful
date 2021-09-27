// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.saveState = this.saveState.bind(this);
    this.handleChance = this.handleChanceTitle.bind(this);
    this.handleChanceSubtitle = this.handleChanceSubtitle.bind(this);
  }

  handleChanceTitle(event) {
    this.saveState({ key: 'title', value: (event.target.value) });
  }

  handleChanceSubtitle(event) {
    this.saveState({ key: 'subtitle', value: (event.target.value) });
  }

  saveState(content) {
    const { key, value } = content;
    this.setState({
      [`${key}`]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title-input"
              id="title-input"
              data-testid="title-input"
              value={ title }
              onChange={ this.handleChanceTitle }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle-input"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChanceSubtitle }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
