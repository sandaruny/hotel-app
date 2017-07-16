import React from 'react';
import ViewportSlider from '../../app-common/viewport-slider/Views';
import CategorySpotlight from '../../category-spotlight/Views.js';
import { CategoryBreadcrumbView, CategorySubViewView } from '../Views';

export const CategoryViewport = ({ params }) => {
  return (
    <div className="viewport-main">
      <CategoryBreadcrumbView catName={params.catName} />
      <CategorySpotlight catName={params.catName} />
      <CategorySubViewView catName={params.catName} />
      {/* <ViewportSlider /> */}
    </div>
  )
};

