import React from 'react';
import './App.css';
import Output from "./UI/output/Output";
import {StateType} from "./types";

interface AppProps {
    state: StateType
}

const App: React.FC<AppProps> = ({state}) => {
  return (
      <div className='container'>
        <Output output={state.output} />
      </div>
  );
}

export default App;
