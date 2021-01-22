import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login.js';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        //user logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {/* App Body */}
      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}


    </div>
  );
}

export default App;
