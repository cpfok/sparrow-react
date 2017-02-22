import React from 'react';
import {Route} from 'react-router';

import {Layout1} from '../../components/layout';

import Sample from './Sample';

export default (
  <Route path="/" component={Layout1}>
    <Route path="/sample" component={Sample}/>
  </Route>
);
