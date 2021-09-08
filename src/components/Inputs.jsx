import React from 'react';

class Inputs extends React.Component {
  render() {
    const { type, id, name, value, onChange, dataTestid } = this.props;

    return (
      <label htmlFor={ id } data-testid={ dataTestid }>
        { props.children }
        <input
          type={ type }
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

export default Inputs;
