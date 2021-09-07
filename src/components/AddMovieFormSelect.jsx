import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFormSelect extends React.Component {
  render() {
    const { options, value, eventListener } = this.props;
    const { name, id, content, optionTag } = options;
    const { optionTagValue, optionTagContent } = optionTag;

    return (
      <label
        data-testid={ `${id}-input-label` }
        htmlFor={ `${id}-input` }
      >
        { content }
        <select
          id={ `${id}-input` }
          data-testid={ `${id}-input` }
          name={ name }
          value={ value }
          onChange={ eventListener }
        >
          { optionTagValue.map((x, i) => (
            <option
              value={ x }
              key={ x }
              data-testid={ `${id}-option` }
            >
              { optionTagContent[i] }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

AddMovieFormSelect.defaultProps = {
  options: '',
  value: '',
  eventListener: '',
};

AddMovieFormSelect.propTypes = {
  options: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    content: PropTypes.string,
    optionTag: PropTypes.shape(
      [PropTypes.arrayOf(PropTypes.string)],
      [PropTypes.arrayOf(PropTypes.string)],
    ),
  }),
  value: PropTypes.string,
  eventListener: PropTypes.func,
};

export default AddMovieFormSelect;
