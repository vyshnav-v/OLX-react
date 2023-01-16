import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, firebaseContext } from './store/Context';
import Post from './store/PostContext';

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(firebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route path={'/signup'}>
            <Signup />
          </Route>
          <Route path={'/login'}>
            <Login />
          </Route>
          <Route path={'/create'}>
            <Create />
          </Route>
          <Route path={'/view'}>
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
