import React from 'react';
import { connect } from 'react-redux';
import navigation from './views/Navigation.jsx';

const navigationView = connect()(navigation);

export default navigationView;
