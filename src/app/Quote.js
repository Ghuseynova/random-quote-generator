import React from 'react';
import './Quote.css';
import Text from './components/Text/Text';
import Author from './components/Author/Author';

const Quote = ({ content, author }) => {
	return (
		<blockquote className="quote">
			<div className="quote__text">
				<Text content={content} />
			</div>
			<div className="quote__author">
				<Author author={author} />
			</div>
		</blockquote>
	);
};

export default Quote;
