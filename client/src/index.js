import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import { Landing } from './Components/Landing';

class App extends React.Component{
  render () {
    return (<Landing />)
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
