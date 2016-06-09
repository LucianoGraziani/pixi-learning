import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import Main from 'components/Main';
import Toc from 'components/Toc';
import Ex01 from 'components/exs/Ex01';
import Ex02 from 'components/exs/Ex02';
import Ex03 from 'components/exs/Ex03';
import Ex04 from 'components/exs/Ex04';
import Ex05 from 'components/exs/Ex05';
import Ex06 from 'components/exs/Ex06';
import Ex07 from 'components/exs/Ex07';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path='/' component={Main}>
    <Route path='ex01-renderer' component={Ex01}/>
    <Route path='ex02-texture-cache' component={Ex02}/>
    <Route path='ex03-load-progress' component={Ex03}/>
    <Route path='ex04-positioning-sprites' component={Ex04}/>
    <Route path='ex05-tileset-sprites' component={Ex05}/>
    <Route path='ex06-texture-atlas' component={Ex06}/>
    <Route path='ex07-dungeon-random-blobs' component={Ex07}/>
    <IndexRoute component={Toc}/>
  </Route>
</Router>, document.getElementById('app'));
