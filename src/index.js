import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer);
render(<Provider store={store}><App/></Provider>,document.getElementById('root'));  

