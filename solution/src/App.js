import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';

class App extends Component {
	render() {
		return (
				<Router>
					<div>
						<Route exact path="/" component={ Home }/>
						<Route exact path="/series" component={ Series }/>
						<Route exact path="/movies" component={ Movies }/>
					</div>
				</Router>
		);
	}
}

export default App;
