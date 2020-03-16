import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './components/App';

import routes from './routes';

ReactDOM.render(<App routes={routes} />, document.getElementById('root'));
