import React from 'react';
import './styles/Cell.css';

// class Cell extends React.Component {

const Cell = (props) => (
	<div className="cell" onClick={props.handleClick(props.key, props.fila)}>
		{props.estado}
	</div>
);

export default Cell;
