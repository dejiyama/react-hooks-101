import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';
import Events from '../components/Events.js';
import EventForm from '../components/EventForm.js'
import AppContext from '../contexts/AppContext'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        {/* EventFormにstateとdispatchを渡す。 */}
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
