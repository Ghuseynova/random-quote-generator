import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';
import ShareBtn from './components/ShareBtn/ShareBtn';
import Button from './components/Button/Button';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			quote: {}
		};

		this.handleClick = this.handleClick.bind(this);
	}

	async componentDidMount() {
		const quote = await randomQuote();
		this.setState({
			quote: quote
		});
	}

	async handleClick() {
		const quote = await randomQuote();
		this.setState({
			quote: quote
		});
	}

	render() {
		const quote = this.state.quote;

		return (
			<>
				<div className="quote-box">
					<div className="quote-box__inner">
						<Quote content={quote.content} author={quote.author} />
					</div>
					<div className="quote-box__buttons">
						<ShareBtn
							className="share-btn--twitter"
							shareText="twitter"
							content={quote.content}
						/>
						<Button
							className="button--blue i-ml"
							buttonText="New Quote"
							onClick={this.handleClick}
						/>
					</div>
				</div>
			</>
		);
	}
}

export default App;

async function randomQuote() {
	const response = await fetch('https://api.quotable.io/random');
	const data = await response.json();
	const answer = data;
	return answer;
}
