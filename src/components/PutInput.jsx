import React from 'react';

class PutInput extends React.Component {
  render() { 
    const {propFor, id, type, name, value, onChange } = this.props;


    return (<>
    <label htmlFor={propFor} data-testid={`${name}-input-label`}></label>
    <input
          id={id}
          name={name}
          type={type}
          data-testid={`${name}-input`}
          value={value}
          onChange={onChange}
        />
    </>);
  }
}
 
export default PutInput;