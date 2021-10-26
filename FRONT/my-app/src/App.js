import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Body from './Components/Body';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Myaccount from './Components/Myaccount';
import Events from './Components/Events';
import Header from './Components/Header';
import EventDetails from './Components/EventDetails';


function App() {

  const [user, setLoginUser] = useState({})

  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        {/* <Route path="/connexion">
          <Connexion />
        </Route> */}
        {/* <Route path="/inscription">
          <Inscription />
        </Route> */}
        <Route path="/myaccount">
          <Myaccount />
        </Route>
        {/* <Route path="/" exact>
          <Home />
        </Route> */}
        <Route path="/events" exact>
          <Events />
        </Route>
        <Route path="/eventdetails/:id" exact>
          <EventDetails />
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/login" >
          <Login setLoginUser={setLoginUser} />
        </Route>
        <Route path="/" >

          {
            user && user._id ? <Body setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
          }
        </Route>
      </Switch>
    </Router>

  )
}
export default App;