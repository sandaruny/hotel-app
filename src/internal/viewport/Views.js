import React from 'react';
import { connect } from 'react-redux';
import viewport from './views/Viewport.jsx';
import dataManager from '../data-manager';

const viewportView = connect()(viewport);

export default viewportView;
