import React from 'react';
import PropTypes from 'prop-types';

class GenreSelectInput extends React.Component {
  render() {
    const { value, handler, genreList, testIds, title } = this.props;
    const { labelId, inputId, optionId } = testIds;
    return (
      <label htmlFor="genre" data-testid={ labelId }>
        { title }
        <select
          name="genre"
          id="genre"
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
  value: '',
  testIds: {
    labelId: '',
    inputId: '',
    optionId: '',
  },
  title: '',
};

export default GenreSelectInput;
