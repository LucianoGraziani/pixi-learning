import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Main from 'components/Main';
import Toc from 'components/Toc';
import Ex1 from 'components/exs/Ex1';
import Ex2 from 'components/exs/Ex2';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path='/' component={Main}>
    <Route path='ex1-renderer' component={Ex1}/>
    <Route path='ex2-texture-cache' component={Ex2}/>
    <IndexRoute component={Toc}/>
  </Route>
</Router>, document.getElementById('app'));
