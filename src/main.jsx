import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UsarContext from './context/UsarContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UsarContext>
			<App />
		</UsarContext>
	</React.StrictMode>
);
