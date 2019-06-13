import React from 'react';
import './styles/Cell.css';

// class Cell extends React.Component {

const Cell = (props) => (
	<div className="cell" onClick={() => props.handleClick(props.arrayIndex)}>
		{props.showState(props.arrayIndex)}
	</div>
);

export default Cell;
