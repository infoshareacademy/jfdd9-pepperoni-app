import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setupFirebase from './setupFirebase'
import {GangstersProvider} from "./contexts/Gangsters";

setupFirebase()

const composeProviders = (children, ...providers) => providers.reduce(
  (result, Next) => <Next>{result}</Next>,
  children
)

ReactDOM.render(
  composeProviders(
    <App />,
    GangstersProvider
  ),
  document.getElementById('root'));
registerServiceWorker();
