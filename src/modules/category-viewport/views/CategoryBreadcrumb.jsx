import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export const CategoryBreadcrumb = ({ catName }) => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/category/{catName}">
          {catName}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Data
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
};

