import React from 'react';
import { connect } from 'react-redux';
import { CategoryList } from './views/CategoryList.jsx';

export const ViewportCategoryList = connect()(CategoryList);

