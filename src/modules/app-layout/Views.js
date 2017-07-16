import React from 'react';
import { connect } from 'react-redux';
import appLayout from './views/AppLayout.jsx';

const appLayoutView = connect()(appLayout);

export default appLayoutView;
