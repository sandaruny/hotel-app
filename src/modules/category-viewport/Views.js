import React from 'react';
import { connect } from 'react-redux';
import { CategoryViewport } from './views/CategoryViewport.jsx';
import { CategoryBreadcrumb } from './views/CategoryBreadcrumb.jsx';
import { CategorySubView } from './views/CategorySubView.jsx';

export const CategoryViewportView = connect()(CategoryViewport);
export const CategoryBreadcrumbView = connect()(CategoryBreadcrumb);
export const CategorySubViewView = connect()(CategorySubView);

