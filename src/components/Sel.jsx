import React from 'react';

class Sel extends React.Component {
  render() {
    const { DataS, val, change } = this.props;
    const { lfr, lid, desc, sId, opVal } = DataS;
    return (
      <label htmlFor={ lfr } data-testid={ lid }>
        {`${desc}`}
        <select
          data-testid={ sId }
          value={ val }
          onChange={ change }
        >
          <option value={ opVal.one } data-testid={ opVal.opId }>Ação</option>
          <option value={ opVal.two } data-testid={ opVal.opId }>Comédia</option>
          <option value={ opVal.three } data-testid={ opVal.opId }>Suspense</option>
        </select>
      </label>
    );
  }
}

export default Sel;
