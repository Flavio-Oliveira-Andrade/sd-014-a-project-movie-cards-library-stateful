import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="ah-header-capsule">
        <span className="ah-header">
          TRYBEFLIX
        </span>
        <header className="header">
          <h1 className="ah-h1">
            Movie Cards Library Stateful
          </h1>
        </header>
        <span className="hamann">
          powered by Anna Hamann
        </span>
      </div>
    );
  }
}

export default Header;
