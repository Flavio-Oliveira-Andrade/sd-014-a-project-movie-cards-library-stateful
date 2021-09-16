import React from 'react';

class Input extends React.Component {
  render() {
    const { nome, description, value, onChange} = this.props;
    return (
      <label
        data-testid={ `${nome}-input-label` }
        htmlFor={ `${nome}-input` }
      >
        {description}
        <input
          type="text"
          id={ `${nome}-input` }
          name={ nome }
          value={ value }
          data-testid={ `${nome}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Input;
