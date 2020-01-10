import React from 'react';

class FooterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const footerStyle = {
      backgroundColor: 'grey',
      color: 'white',
      borderTop: 'solid yellow 1px',
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '5px'
    };

    const buttonStyle = {
      borderRadius: '45px',
      border: 'none',
      width: ' 70px',
      height: '30px'
    };

    return (
      <div style={footerStyle}>
        <button style={buttonStyle}>Home</button>
        <button style={buttonStyle}>Breeds</button>
        <button style={buttonStyle}>Refresh</button>
      </div>
    );
  }
}

export default FooterMenu;
