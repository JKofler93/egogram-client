import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import PostForm from './components/PostForm';
import SignUp from './components/auth/SignUp';
import Home from './components/Home'
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
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
          // console.log(userData)
          // console.log(userData.user)
          // console.log(userData.user.id)
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
  const logutHandler = () => {
    localStorage.clear("token")
    history.push('/login')
    setUser("")
  }

  
  return (
    <div className="App">
    {user && <Navbar logutHandler={logutHandler}/>}
      <Switch>
        <Route exact path='/home'>
          <Home
            user={user}
          />
        </Route>

        <Route exact path='/login'>
          <Login loginUser={loginUser}/>
        </Route>

        <Route exact path='/'>
          <SignUp/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
