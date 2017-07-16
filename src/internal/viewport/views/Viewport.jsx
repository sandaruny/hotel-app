import React from 'react';
import { ViewportCategoryList } from '../../../modules/category-list/Views.js';
import { ViewportMainView } from '../../../modules/main-viewport/Views';
import { Grid, Row, Col } from 'react-bootstrap';

const Viewport = () => {
  return (
    <div className="viewport-wrapper">
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={6} md={2}><ViewportCategoryList /></Col>
          <Col xs={12} md={10}><ViewportMainView /></Col>
        </Row>
      </Grid>
    </div>
  )
};

export default Viewport;
