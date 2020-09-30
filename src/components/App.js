import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';
import Events from '../components/Events.js';
import EventForm from '../components/EventForm.js'
import OperationLogs from './OperationLogs.js'
import AppContext from '../contexts/AppContext'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  //Json.stringfyでstringにしたものを元々のparseの形に戻す。
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  //useEffectの第二引数にstateを記述することで、stateの値が変化したら呼ばれる。
  useEffect(() =>{
    //ローカルストレージに保存するには、文字列化する必要がある。
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  },[state])

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
