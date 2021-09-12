import React from 'react';

class PutInput extends React.Component {
  render() {
    const { data, id, type, name, value, onChange, label } = this.props;
    return (<>
      {/* <label htmlFor={ propFor } data-testid={ `${name}-input-label` } /> */}
      <label htmlFor={id} data-testid={`${data}-input-label`} >{label}</label>
      {type === 'textarea' ? <textarea
        id={name}
        name={name}
        type={type}
        data-testid={`${data}-input`}
        value={value}
        onChange={onChange}
        cols="30"
        rows="10"
      />
        : <input
          id={name}
          name={name}
          type={type}
          data-testid={`${data}-input`}
          value={value}
          onChange={onChange}
        />}

    </>);
  }
}

export default PutInput;
