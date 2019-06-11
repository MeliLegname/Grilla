import React from 'react';
import './styles/Cell.css';

class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = (e) => {
		console.log('Button was clicked');
	};
	render() {
		return <div className="cell" onClick={this.handleClick} />;
	}
}

export default Cell;
