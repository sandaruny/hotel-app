import React from 'react';
import Header from '../../app-header/Views.js';
import Navigation from '../../app-navigation/Views.js';
import Viewport from '../../../internal/viewport/Views';

const AppLayout = ({children}) => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      {children}
    </div>
  )
};

export default AppLayout;
