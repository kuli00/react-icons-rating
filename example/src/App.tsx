import React from 'react';

import RatingIcons from 'react-icons-rating';

const heartPath = 'M25.808 0A9.186 9.186 0 0017.5 5.3 9.18 9.18 0 000 9.27C0 22.421 17.5 28 17.5 28S35 22.421 35 9.27A9.231 9.231 0 0025.808 0';

function App() {
  return (
    <div className="App">
      <RatingIcons
        numOfIcons={5}
        rating={4.4}
        fillColor="#00f"
        strokeWidth={2}
        size={50}
        iconPadding={5}
        direction="row"
        // customIcon={{
        //   path: heartPath,
        //   viewBox: '0 0 35 28'
        // }}
        // backgroundColor="#d3d3d3"
      />
    </div>
  );
}

export default App;
