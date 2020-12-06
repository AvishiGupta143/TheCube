import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Base } from './views/Base/Base';



const Routes = () => {
	
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Base}/>
				{/* dont use exact keyword here or nesting routing will fail */}
			</Switch>
		</BrowserRouter>
	); 
}

export default Routes;	