import React from 'react';
import AlertButton from './components/AlertButton';
import Utility, { HyperUtility, HyperUtility2 } from './components/Utility';
import './App.css';

function App() {
  return (
    <div>
      <AlertButton />
      <Utility />
      <HyperUtility />
      <HyperUtility2 />
    </div>
  );
}

export default App;
