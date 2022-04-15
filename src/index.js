import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './components/redux/state.js'

let renderAllTree = () =>{
ReactDOM.render(
  <React.StrictMode>
    <App state ={store.getState()} 
    dispatch ={store.dispatch.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
renderAllTree();
store.subscriber(renderAllTree);


reportWebVitals();
