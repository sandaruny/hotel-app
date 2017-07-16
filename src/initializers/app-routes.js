import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import appLayout from '../modules/app-layout/Views.js';
import categoryView from '../modules/app-layout/Views';
import viewport from '../internal/viewport/Views';
import { CategoryViewportView } from '../modules/category-viewport/Views';

export default
<Route path="/" component={appLayout}>
  <IndexRoute component={viewport}/>
  <Route path="/category/:catName" component={CategoryViewportView}/>
</Route>

