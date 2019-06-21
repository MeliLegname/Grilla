import React from 'react';

import './App.css';
import CellsContainer from './components/CellsContainer';

import { BrowserRouter, Route } from 'react-router-dom';
export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tituloDelJuego: 'TA TE TI',

			numColumn: 3,

			numRow: 3,

			withImg: true,

			posibleValue: [
				' ',
				'https://image.flaticon.com/icons/svg/763/763704.svg',
				'https://image.flaticon.com/icons/svg/616/616451.svg',
				'https://image.flaticon.com/icons/svg/135/135077.svg'
			],
			cellState: []
		};
	}

	initCellState() {
		// console.log(this.state.numColumn, this.state.numRow);
		let cellState = [ ...Array(parseInt(this.state.numColumn, 10) * parseInt(this.state.numRow, 10)) ].map(
			(cellState) => (cellState = this.state.posibleValue[0])
		);
		this.setState({ cellState });
	}
	//en esta funcion se inicializa el estado de la celda . dice que cellState es igual a la copia del numero que da como resultado la multiplicacion del numero de filas por el numero de columnas(porque de sta forma saco el numero indice) se le realizo el parseInt para poder convertir los strings en numeros y se le puso el numero 10 para avisar que va a ser un numero entero.

	getArrayIndex = (row, column) => {
		// console.log(this.state);
		return row * this.state.numColumn + column;
	};

	//buscar como pasar el estado porque bla si se ve como se modifica pero this.state.cellState no.
	//como mi estructura de datos es un array y la muestro como la matriz necesito un algoritmo que me permita trabajar un array como si fuera una matriz.. yo le tengo que pasar una fila y una columna para que el sepa de que celda estamos hablando y que me lo traiga.
	// y la matriz tiene dos por eso hay que hacer la cuenta . en la que primero te salteas la fila y agarrras el numero de columnta para eso tenes que tener en cuenta el numero de columnas totales.
	//formula magina para poder encontrar el indice hay que hacer una cuenta. el array debe recibir solo un numero

	componentDidMount() {
		this.initCellState();
		// console.log(this.state.cellState);
	}

	inputChangeHandle = (name, event) => {
		let state = { ...this.state };
		state[name] = event.target.value;
		this.setState({ state }, () => {
			// this.initCellState();
		});
	};
	//buscar como pasar el estado porque bla si se ve como se modifica pero this.state.cellState no.

	//estoy haciendo un setstate e inmediatamente despues de eso ejecuto la funcion initcellsatate que NECESITA QUE el state este actualizado y no llega a estarlo.

	handleClick = (arrayIndex) => {
		// console.log(arrayIndex);
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
	};
	//Yo guardo el estado actual de cada celda en cellState para eso necesite pasarle un indice a cada celda.
	//por otro lado genere un new state para que me copie el estado actual de cellstate y me lo pise con el nuevo estado de cada celda.
	// lo que hace la función es recorrer la cantidad de posibles valores que tengo en el array. Si el estado actual de las celdads es igual al valor inicial de losposibles valores RECORRE posibles valores para ver si hay un valor siguiente a ese. SI HAY un valor siguiente a ese .. se cambia el estadado actual(se copia el estado y s elo pisa con newstate) por el valor siguiente que existe en posible value. SINO existe el estado siguiente (osea si ya se fue del array) volveme al estado inicial (que es 0). por ultimo reemplazame el lugar donde yo estoy guardando el estado actual por el nuevo estado.

	showState = (arrayIndex) => {
		return this.state.cellState[arrayIndex];
	};
	//En showstate se retonerna el estado de la celda, para esto se le tiene que pasar el arrayindex. para acceder al indice de un array hay que ponerlo entre corchetes NO entre parentesis.
	//declaramos column y row como un array vacio para pushear ahi dentro el estado.
	render() {
		return (
			<BrowserRouter>
				<CellsContainer
					cellState={this.state.cellState}
					numColumn={this.state.numColumn}
					numRow={this.state.numRow}
					handleClick={this.handleClick}
					getArrayIndex={this.getArrayIndex}
					showState={this.showState}
					posibleValue={this.state.posibleValue}
					tituloDelJuego={this.state.tituloDelJuego}
					withImg={this.state.withImg}
				/>
			</BrowserRouter>
		);
	}
}
