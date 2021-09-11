import React from 'react';

class SubInput extends React.Component {
  render() {
    const { subtitle } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          id="subtitle"
          type="text"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default SubInput;
