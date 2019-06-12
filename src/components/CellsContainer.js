import React from 'react';

import './styles/CellsContainer.css';
import Cell from './Cell';

class CellsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			numColumn: 3,
			numRow: 3,

			estados: [ 'X', 'O', ' ' ],
			cellState: []
		};
	}

	initCellState() {
		let cellState = [ ...Array(9) ].map((cellState) => (cellState = this.state.estados[0]));
		this.setState({ cellState });
	}

	//buscar como pasar el estado porque bla si se ve como se modifica pero this.state.cellState no.
	//como mi estructura de datos es un array y la muestro como la matriz necesito un algoritmo que me permita trabajar un array como si fuera una matriz.. yo le tengo que pasar una fila y una columna para que el sepa de que celda estamos hablando y que me lo traiga.
	// y la matriz tiene dos por eso hay que hacer la cuenta . en la que primero te salteas la fila y agarrras el numero de columnta para eso tenes que tener en cuenta el numero de columnas totales.
	//formula magina para poder encontrar el indice hay que hacer una cuenta. el array debe recibir solo un numero

	componentDidMount() {
		this.initCellState();
		console.log(this.state.cellState);
	}

	inputChangeHandle(name, event) {
		let state = { ...this.state };
		state[name] = event.target.value;
		this.setState(state);
	}

	render() {
		let column = [];

		for (let i = 0; i < this.state.numColumn; i++) {
			column.push(column['']);
		}
		let row = [];

		for (let i = 0; i < this.state.numRow; i++) {
			row.push(row['']);
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
												handleClick={() => this.handleClick(index, indexFila)}
												estado={this.state.cellState}
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
