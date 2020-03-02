import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	constructor(props) {
		super(props);

		this.handleCLick = this.handleCLick.bind(this);
	}

	handleCLick() {
		this.props.onClick();
	}

	render() {
		return (
			<button
				className={'button ' + this.props.className}
				onClick={this.handleCLick}
			>
				{this.props.buttonText}
			</button>
		);
	}
}

export default Button;
