import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';
import Events from '../components/Events.js';
import EventForm from '../components/EventForm.js'
import OperationLogs from './OperationLogs.js'
import AppContext from '../contexts/AppContext'

const App = () => {
  const initialState = { events: [], operationLogs: [] }
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        {/* EventFormにstateとdispatchを渡す。 */}
        <EventForm />
        <Events />
        <OperationLogs/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
