import React from 'react';
import { connect } from 'react-redux';
import { NavbarInstance } from './views/AppHeader.jsx';

const appHeaderView = connect()(NavbarInstance);

export default appHeaderView;
