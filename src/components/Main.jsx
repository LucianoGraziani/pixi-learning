import React from 'react';
var Main = ({children}) => {
  return (
    <div>
      <div className='row'>
        <div className='column small-centered medium-6 large-4'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Main;
