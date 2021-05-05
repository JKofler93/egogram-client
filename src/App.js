import React, { useEffect } from 'react'
import './App.css';
import PostForm from './components/PostForm';
import UserForm from './components/UserForm';

function App() {

  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }, [])
  
  return (
    <div className="App">
      <PostForm/>
      <br></br>
      <br></br>
      <br></br>
      <UserForm/>
    </div>
  );
}

export default App;
