import React from 'react';

import './styles/CellsContainer.css';
import Cell from './Cell';

class CellsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			numColumn: 5,
			column: [],

			numRow: 5,
			row: [],

			posibleValue: [ ' ', 'X', 'O', 'J', 'R' ],
			cellState: []
		};
	}

	initCellState() {
		console.log(this.state.numColumn, this.state.numRow);
		let cellState = [ ...Array(parseInt(this.state.numColumn, 10) * parseInt(this.state.numRow, 10)) ].map(
			(cellState) => (cellState = this.state.posibleValue[0])
		);
		this.setState({ cellState });
	}

	getArrayIndex(row, column) {
		return row * this.state.numColumn + column;
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
		this.setState({ state }, () => {
			// this.initCellState();
		});
	}

	//estoy haciendo un setstate e inmediatamente despues de eso ejecuto la funcion initcellsatate que NECESITA QUE el state este actualizado y no llega a estarlo.

	handleClick(arrayIndex) {
		let estadoActual = this.state.cellState[arrayIndex];
		let newState = [ ...this.state.cellState ];

		for (let i = 0; i < this.state.posibleValue.length; ++i) {
			if (estadoActual === this.state.posibleValue[i]) {
				if (this.state.posibleValue[i + 1]) {
					newState[arrayIndex] = this.state.posibleValue[i + 1];
				} else {
					newState[arrayIndex] = this.state.posibleValue[0];
				}
			}
		}
		this.setState({ cellState: newState });
	}
	//Yo guardo el estado actual de cada celda en cellState para eso necesite pasarle un indice a cada celda.
	//por otro lado genere un new state para que me copie el estado actual de cellstate y me lo pise con el nuevo estado de cada celda.
	// lo que hace la función es recorrer la cantidad de posibles valores que tengo en el array. Si el estado actual de las celdads es igual al valor inicial de losposibles valores RECORRE posibles valores para ver si hay un valor siguiente a ese. SI HAY un valor siguiente a ese .. se cambia el estadado actual(se copia el estado y s elo pisa con newstate) por el valor siguiente que existe en posible value. SINO existe el estado siguiente (osea si ya se fue del array) volveme al estado inicial (que es 0). por ultimo reemplazame el lugar donde yo estoy guardando el estado actual por el nuevo estado.

	showState(arrayIndex) {
		return this.state.cellState[arrayIndex];
	}
	//para acceder al indice de n array hay que ponerlo entre corchetes NO entre parentesis.
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
												handleClick={(arrayIndex) => this.handleClick(arrayIndex)}
												arrayIndex={this.getArrayIndex(indexFila, index)}
												key={index}
												fila={indexFila}
												showState={(arrayIndex) => this.showState(arrayIndex)}
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
