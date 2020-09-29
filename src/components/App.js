import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';
import Events from '../components/Events.js';
import EventForm from '../components/EventForm.js'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  
  return (
    <div className="container-fluid">
      {/* EventFormにstateとdispatchを渡す。 */}
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
