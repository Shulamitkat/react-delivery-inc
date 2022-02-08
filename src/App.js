import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './components/Routes';
import NavigationBar from './components/NavigationBar';
import GetInvoice from './components/GetInvoice';
import './App.css';

function App() {

  const [appData, setAppData] = useState({ customers: [], packages: [] });
   

     useEffect(() => {
      fetch("/data.json").then(response => response.json())
    .then(data => { setAppData(data) });
    },[]);
 
  return (
    <div>
    

      <NavigationBar />
      <Switch>
        {Routes.map((route) => (
          <Route exact path={route.path} key={route.path}>
            <route.component appData={appData} />
          </Route>
        ))}

          <Route path="/getInvoice">
              <GetInvoice/>
          </Route>
      </Switch>
    </div>

  );
}

export default App;

