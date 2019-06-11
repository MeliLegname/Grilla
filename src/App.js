import React from 'react';
import logo from './logo.svg';
import './App.css';
import CellsContainer from './components/CellsContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cell from './components/Cell';

function App() {
	return (
		<BrowserRouter>
			{/* <Route exact path="./components/CellsContainer" component={CellsContainer} /> */}

			<CellsContainer>
				<Route exact path="./components/Cell" component={Cell} />
			</CellsContainer>
		</BrowserRouter>
	);
}

export default App;
