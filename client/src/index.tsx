import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Store.js';
import { Provider } from 'react-redux';
import * as serviceWorker from './ServiceWorker';
import './root.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={ store }>
        <App />
    </Provider>
);

serviceWorker.unregister();