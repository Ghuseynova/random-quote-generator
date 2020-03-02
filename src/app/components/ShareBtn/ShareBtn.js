import React from 'react';
import './ShareBtn.css';

function ShareBtn({ className, shareText, content }) {
	return (
		<a
			href={
				'https://twitter.com/intent/tweet?text=' +
				content +
				'&hashtags=ghuseynova'
			}
			className={'share-btn ' + className}
		>
			{shareText}
		</a>
	);
}

export default ShareBtn;
