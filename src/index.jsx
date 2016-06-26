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
import routes from 'constants/routes';

ReactDOM.render(
	<Router history={browserHistory}>
	<Route path="/" component={Main}>
		<IndexRoute component={Toc}/>

		<Route path={routes.EX1} component={Ex01}/>
		<Route path={routes.EX2} component={Ex02}/>
		<Route path={routes.EX3} component={Ex03}/>
		<Route path={routes.EX4} component={Ex04}/>
		<Route path={routes.EX5} component={Ex05}/>
		<Route path={routes.EX6} component={Ex06}/>
		<Route path={routes.EX7} component={Ex07}/>
		<Route path={routes.EX8} component={Ex08}/>
		<Route path={routes.EX9} component={Ex09}/>
		<Route path={routes.EX10} component={Ex10}/>
		<Route path={routes.EX11} component={Ex11}/>
		<Route path={routes.EX12} component={Ex12}/>
	</Route>
</Router>, document.getElementById('app'));
