import React from 'react';

class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const divStyle = {
      height: '600px',
      backgroundColor: 'orange'
    };
    return (
      <div style={divStyle}>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    );
  }
}

export default GalleryContainer;
