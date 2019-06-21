import React from 'react';

import './styles/CellsContainer.css';
import Cell from './Cell';

export default class CellsContainer extends React.Component {
	render() {
		let column = [];

		for (let i = 0; i < this.props.numColumn; i++) {
			column.push(column['']);
		}
		let row = [];

		for (let i = 0; i < this.props.numRow; i++) {
			row.push(row['']);
		}
		return (
			<React.Fragment>
				<h1 className="tituloDelJuego">ESTAS JUGANDO {this.props.tituloDelJuego}</h1>
				<div className="CellsContainer">
					<div className="ContFilas">
						{/* aca se realizo un map a row el cual retorna un div nuevo con la propiedad filas que pertenece a display flex  direction row. esto es importante ya que si no se generara este div nuevo, y se le podria igualmente el div contfilas con direction colum y todo se podria vertical. */}
						{row.map((row, indexFila) => {
							return (
								<div className="PropiedadFilas" key={indexFila}>
									{column.map((el, index) => {
										return (
											<Cell
												handleClick={(arrayIndex) => this.props.handleClick(arrayIndex)}
												arrayIndex={this.props.getArrayIndex(indexFila, index)}
												key={index}
												fila={indexFila}
												showState={(arrayIndex) => this.props.showState(arrayIndex)}
												value={el}
												posibleValue={this.props.posibleValue}
												withImg={this.props.withImg}
											/>
										);
										//el handleclick es una funcion creada en cells dentro de un onclick. a esta funcion le pasas por props un array index que es el resultado de la cuentra entre el index de las filas y el index de las columnas y la ejecurtas.
										//tambien se llama a la funcion getArrayindex que es la funcion que genera la cuenta que te da el resultado del arrayindex que luego s elo pasa por props a habndleclick. Key corresponde al index de la columna y fila hace referencia al index de gula. la funcion showstate es llamada cpara mostrar el estado de la celda. a este se le pasa arrayindex porque la se necesita saber en que posición esta para ver que estado le pertenece
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
