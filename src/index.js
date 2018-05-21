import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setupFirebase from './setupFirebase';
import { UserProvider } from './contexts/User';
import {GangstersProvider} from "./contexts/Gangsters";

setupFirebase()

const composeProviders = (children, ...providers) => providers.reduce(
  (result, Next) => <Next>{result}</Next>,
  children
)

ReactDOM.render(
  composeProviders(
    <App />,
    GangstersProvider,
    UserProvider
  ),
  document.getElementById('root'));
registerServiceWorker();
