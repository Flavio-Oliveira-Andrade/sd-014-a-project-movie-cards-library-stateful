import React from 'react';
import PropTypes from 'prop-types';

class GenreSelectInput extends React.Component {
  render() {
    const { value, handler, genreList, testIds, title, name } = this.props;
    const { labelId, inputId, optionId } = testIds;
    return (
      <label htmlFor="selectedGenre" data-testid={ labelId }>
        { title }
        <select
          name={ name }
          id="selectedGenre"
          value={ value }
          onChange={ handler }
          data-testid={ inputId }
        >
          {genreList.map(({ genre, text }) => (
            <option
              value={ genre }
              key={ genre }
              data-testid={ optionId }
            >
              {text}
            </option>
          ))}
        </select>
      </label>

    );
  }
}

GenreSelectInput.propTypes = {
  handler: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  genreList: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  testIds: PropTypes.shape({
    labelId: PropTypes.string,
    inputId: PropTypes.string,
    optionId: PropTypes.string,
  }),
  title: PropTypes.string,
};

GenreSelectInput.defaultProps = {
  handler: () => undefined,
  name: '',
  value: '',
  testIds: {
    labelId: '',
    inputId: '',
    optionId: '',
  },
  title: '',
};

export default GenreSelectInput;
