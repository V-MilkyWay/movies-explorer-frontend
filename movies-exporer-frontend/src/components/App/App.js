import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile';
import Login from '../Login/Login.js';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navigation status={'main'} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Navigation status={'movies'} />
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Navigation status={'saved-movies'} />
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Navigation />
          <Header />
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;