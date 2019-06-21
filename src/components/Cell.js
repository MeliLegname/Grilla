import React from 'react';
import './styles/Cell.css';

// class Cell extends React.Component {

const Cell = (props) => (
	<div className="cell" onClick={() => props.handleClick(props.arrayIndex)}>
		{props.showState(props.arrayIndex) === ' ' ? null : !!props.withImg ? (
			<div className="cellImg" style={{ backgroundImage: 'url(' + props.showState(props.arrayIndex) + ')' }} />
		) : (
			props.showState(props.arrayIndex)
		)}
	</div>
);
// Acá estoy creando un div con un onclick que le pasamos por props handleclick, que es una funcion creada en cellcontainers.
//Luego estoy mostrando tambien por props DENTRO DE LA CELDA cual es el estado de la misma, para esto hay que pasarle el arrayIndex proque sino no sbe a que celda especifica estamos llamando.
export default Cell;
