import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Switch, useHistory, useLocation } from "react-router-dom";
import SignUp from './components/auth/SignUp';
import Home from './components/home/Home'
import Login from './components/auth/Login';
import Navbar from './components/app/Navbar';
import Profile from './components/profile/Profile'
import './App.css';

function App() {
  const [user, setUser] = useState("");
  const history = useHistory();


    // Authenticate user and keep them "logged in"
    useEffect(() => {
      const token = localStorage.getItem("token");
      if(token) {
        fetch("http://localhost:3000/profile", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(userData => {
          // console.log(userData.user)
          setUser(userData.user);
          // console.log(user)
        })
      }
    }, [])

  // Logs in user
  const loginUser = (user) => {
    setUser(user)
    history.push("/home")
  }

  // Logs out Username
  const logoutHandler = () => {
    localStorage.clear("token")
    history.push('/login')
    setUser("")
  }

  
  return (
    <div className="App">
    {user ? <Navbar logoutHandler={logoutHandler} user={user}/> : null}
      <Switch>
        <Route exact path='/profile/:id'>
          <Profile
            user={user}
          />
        </Route>
        <Route exact path='/home'>
          <Home
            user={user}
          />
        </Route>

        <Route exact path='/login'>
          <Login loginUser={loginUser}/>
        </Route>

        <Route exact path='/'>
          <SignUp loginUser={loginUser}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
