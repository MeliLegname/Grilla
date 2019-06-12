import React from 'react';

import './styles/CellsContainer.css';
import Cell from './Cell';
import { runInThisContext } from 'vm';
import { arrayExpression } from '@babel/types';

class CellsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			numColumn: 3,

			numRow: 3,

			estados: [ 'X', 'O', ' ' ]
		};
	}

	// const children = props.children;

	handleClick(index) {}

	inputChangeHandle(name, event) {
		let state = { ...this.state };
		state[name] = event.target.value;
		this.setState(state);
	}

	render() {
		let column = [];

		for (let i = 0; i < this.state.numColumn; i++) {
			column.push(i);
		}

		let row = [];

		for (let i = 0; i < this.state.numRow; i++) {
			row.push(i);
		}
		return (
			<React.Fragment>
				<div className="panelControl">
					<label>
						<p>Columnas:</p>
						<input
							type="number"
							name="quantity"
							min="3"
							value={this.state.numColumn}
							onChange={(event) => this.inputChangeHandle('numColumn', event)}
						/>
					</label>

					<label>
						<p>Filas:</p>
						<input
							type="number"
							name="quantity"
							min="3"
							value={this.state.numRow}
							onChange={(event) => this.inputChangeHandle('numRow', event)}
						/>
					</label>
				</div>
				<div className="CellsContainer">
					<div className="ContFilas">
						{row.map((object, indexFila) => {
							return (
								<div className="PropiedadFilas" key={indexFila}>
									{column.map((object, index) => {
										return (
											<Cell
												handleClick={() => this.handleClick(index)}
												estado={'J'}
												key={index}
												fila={indexFila}
											/>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CellsContainer;
