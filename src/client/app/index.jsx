import React from 'react';
import {render} from 'react-dom';
import MainForm from './11c.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
      <MainForm />
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));



