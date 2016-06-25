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
import Ex08 from 'components/exs/Ex08';
import Ex09 from 'components/exs/Ex09';
import Ex10 from 'components/exs/Ex10';
import Ex11 from 'components/exs/Ex11';
import Ex12 from 'components/exs/Ex12';

ReactDOM.render(
	<Router history={browserHistory}>
	<Route path="/" component={Main}>
		<IndexRoute component={Toc}/>

		<Route path="ex01-renderer" component={Ex01}/>
		<Route path="ex02-texture-cache" component={Ex02}/>
		<Route path="ex03-load-progress" component={Ex03}/>
		<Route path="ex04-positioning-sprites" component={Ex04}/>
		<Route path="ex05-tileset-sprites" component={Ex05}/>
		<Route path="ex06-texture-atlas" component={Ex06}/>
		<Route path="ex07-dungeon-random-blobs" component={Ex07}/>
		<Route path="ex08-basic-movement" component={Ex08}/>
		<Route path="ex09-velocity-props" component={Ex09}/>
		<Route path="ex10-game-states" component={Ex10}/>
		<Route path="ex11-keyboard-events" component={Ex11}/>
		<Route path="ex12-local-global-positions" component={Ex12}/>
	</Route>
</Router>, document.getElementById('app'));
