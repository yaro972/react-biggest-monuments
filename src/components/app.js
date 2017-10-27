import React, { Component } from 'react';

import MonumentsList from '../containers/monuments_list';
import MonumentDetail from '../containers/monuments_detail';

export default class App extends Component {
  render() {
    return (
      <div><MonumentsList /><MonumentDetail /></div>
    );
  }
}
