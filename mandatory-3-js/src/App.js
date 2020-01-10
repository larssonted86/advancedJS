import React from 'react';
import './App.css';
import FooterMenu from './FooterMenu.js';
import GalleryContainer from './GalleryContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const appStyle = {
      margin: '0px',
      height: '100vh',
      backgroundColor: 'grey'
    };
    return (
      <div className="app" style={appStyle}>
        <h1>Breeds</h1>
        <GalleryContainer />
        <FooterMenu style={{ position: 'bottom' }} />
      </div>
    );
  }
}

export default App;
