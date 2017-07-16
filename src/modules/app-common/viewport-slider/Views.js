import React from 'react';
import { connect } from 'react-redux';
import { ViewportSlider } from './views/ViewportSlider.jsx';

const viewportSlider = connect()(ViewportSlider);

export default viewportSlider;
