import React from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Navigation from '../Navigation/Navigation';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as Auth from '../../utils/auth';
import api from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedCards, setSavedCards] = React.useState([]);
  const [likedCards, setLikedCards] = React.useState([]);
  const [message, setMessage] = React.useState(' ');
  const [filtText, setFiltText] = React.useState('');
  const [statServer, setStatServer] = React.useState('');
  const [statErrProfile, setErrProfile] = React.useState('');
  const [numPlus, setNumPlus] = React.useState(3);
  const [showMore, setShowMore] = React.useState(12);
  const [filterSearch, setFilterSearch] = React.useState(false);
  const [filter, setFilter] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [statResult, setStatResult] = React.useState(false);
  const [statMovies, setStatMovies] = React.useState(false);
  const [statButton, setStatButton] = React.useState(false);
  const [statPreload, setStatPreload] = React.useState(false);
  const [loadedMovies, setLoadedMovies] = React.useState(false);
  const [redactProfile, setRedactProfile] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);
  const history = useHistory();

  const updateSavedCardList = React.useCallback(() => {
    deleted === true ? setDeleted(false) : setDeleted(false)
    let result = getLocalStorage().map(card => getLocalStorageLikedCards().find(({ movieId }) => movieId === card.id.toString()) || card);
    return result
  }, [deleted]);

  React.useEffect(() => {
    adaptivContent();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      function getUserInfo() {
        api.initialUsers()
          .then((result) => {
            setCurrentUser(
              result.data
            );
          })
          .catch((err) => {
            console.log(err)
          })
      }
      getUserInfo();
    }
  }, [loggedIn]);

  React.useEffect(() => {
    window.addEventListener(`resize`, event => {
      adaptivContent();
    }, false);
    (savedCards.length > 0) ? setStatMovies(true) : setStatMovies(false);
    (savedCards.length >= showMore) ? setStatButton(true) : setStatButton(false);

  }, [showMore, savedCards]);

  React.useEffect(() => {
    let regular = new RegExp(`${filtText}`, 'i');
    function filterLikedMuvies() {
      let filteredLikedCards;
      if (filter === false) {
        if (filterSearch === false) {
          filteredLikedCards = getLocalStorageLikedCards();
          return filteredLikedCards;
        } else {
          filteredLikedCards = getLocalStorageLikedCards().filter((c) => regular.test(c.nameRU));
          if (filteredLikedCards.length < 1) {
            setStatMovies(false);
            setStatButton(false)
            setStatResult(true);
            setMessage('Ничего не найдено');
            return filteredLikedCards;
          } else {
            setStatMovies(true);
            setStatResult(false);
            setStatButton(false);
            return filteredLikedCards;
          }
        }
      } else {
        if (filterSearch === false) {
          filteredLikedCards = getLocalStorageLikedCards().filter((c) => c.duration < 40);
          return filteredLikedCards;
        } else {
          filteredLikedCards = getLocalStorageLikedCards().filter((c) => c.duration < 40).filter((c) => regular.test(c.nameRU));
          if (filteredLikedCards.length < 1) {
            setStatMovies(false);
            setStatResult(true);
            setMessage('Ничего не найдено');
            setStatButton(false)
            return filteredLikedCards;
          } else {
            setStatResult(false);
            setStatMovies(true);
            setStatButton(false);
            return filteredLikedCards;
          }
        }
      }
    }
    function initialSavedCards() {
      api.initCardsFromServer()
        .then((result) => {
          if (typeof currentUser._id !== 'undefined') {
            localStorage.setItem("likeCards", JSON.stringify([...result.data.filter((c) => c.owner === currentUser._id)]))
          }
        })
        .then(() => setLikedCards(filterLikedMuvies()))
        .catch((err) => {
          console.log(err)
        })
    }
    initialSavedCards();
  }, [filter, filterSearch, filtText, currentUser, deleted]);

  React.useEffect(() => {
    function tokenCheck() {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        Auth.getContent(jwt).then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push('/movies');
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    }
    tokenCheck();
  }, [history]);

  React.useEffect(() => {
    function filterMuvies() {
      let filteredCards;
      if (filter === false) {
        filteredCards = updateSavedCardList();
        return filteredCards;
      } else {
        filteredCards = updateSavedCardList().filter((c) => c.duration < 40);
        return filteredCards;
      }
    }
    setSavedCards(filterMuvies())
  }, [filter, updateSavedCardList]);

  const adaptivContent = () => {
    let width = window.innerWidth;
    if (width >= 1280) {
      setShowMore(12);
      setNumPlus(3);
    } else if ((width >= 768) && (width < 1280)) {
      setShowMore(8);
      setNumPlus(2);
    } else if ((width >= 320) && (width < 768)) {
      setShowMore(5);
      setNumPlus(5);
    }
  }

  const searchSavedCards = (e) => {
    e.preventDefault();
    setFilterSearch(true)
  }

  function initialCards() {
    let regular = new RegExp(`${filtText}`, 'i');
    setFilterSearch(false)
    setStatPreload(true);
    setStatMovies(false);
    setStatButton(false)
    if (loadedMovies === false) {
      moviesApi.initCardsFromServer()
        .then((result) => {
          setStatPreload(false);
          setStatMovies(true);
          setStatButton(false)
          setLoadedMovies(true)
          setStatResult(false);
          localStorage.setItem("cards", JSON.stringify([...result]));
        }).then(() => {
          let movies = getLocalStorage().filter((c) => regular.test(c.nameRU));
          if (movies.length < 1) {
            setStatResult(true);
            setStatMovies(false);
            setStatButton(false)
            setMessage('Ничего не найдено');
          } else {
            setStatMovies(true);
            setStatResult(false);
            setSavedCards(movies);
          }
          setStatPreload(false);
        })
        .catch((err) => {
          setStatPreload(false);
          setStatResult(true);
          setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          console.log(err)
        })
    } else {
      let movies = getLocalStorage().filter((c) => regular.test(c.nameRU));
      if (movies.length < 1) {
        setStatResult(true);
        setMessage('Ничего не найдено');
      } else {
        setStatResult(false);
        setSavedCards(movies);
      }
      setStatPreload(false);
    }
  }

  const handleClickSaveMovie = (data) => {
    api.loadingNewCardOnServer(data).then((newCard) => {
      setLikedCards([...likedCards, newCard]);
      setDeleted(true)
    }).then(() => setDeleted(false)).catch((err) => {
      console.log(err);
    });
  }

  const handleClickDeleteMovie = (card) => {
    let deleteCard = likedCards.filter((c) => c._id === card._id.toString())
    api.deleteCardFromServer(deleteCard[0]._id)
      .then(() => {
        setLikedCards((state) => state.filter((c) => c._id !== deleteCard[0]._id));
        setDeleted(true);
      }).then(() => setDeleted(false))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickDeleteLikedMovie = (card) => {
    let deleteCard = likedCards.filter((c) => c._id === card._id.toString())
    api.deleteCardFromServer(deleteCard[0]._id)
      .then(() => {
        setLikedCards((state) => state.filter((c) => c._id !== deleteCard[0]._id));
        setDeleted(true);
      })
      .then(() => setDeleted(false))
      .catch((err) => {
        console.log(err);
      });
  };

  const openNav = () => {
    setStatus(true);
  }
  const closeNav = () => {
    setStatus(false);
  }

  const handleRedactClick = () => {
    setRedactProfile(true)
  };

  function handleClickShowMore(e) {
    e.preventDefault();
    let num = showMore + numPlus;
    setShowMore(num);
  }

  const handleClickFilterCheckbox = () => {
    filter === false ? setFilter(true) : setFilter(false);
  }

  function getLocalStorage() {
    const card = localStorage.getItem('cards');
    return card !== null ? JSON.parse(card) : [];
  }

  function getLocalStorageLikedCards() {
    const card = localStorage.getItem("likeCards");
    return card !== null ? JSON.parse(card) : [];
  };


  const handleRegister = (name, email, password) => {
    Auth.register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password)
        }
      }).catch((err) => {
        setStatServer(err.message);
        console.log(err.message);
      });
  };

  function handleLogin(email, password) {
    Auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          setStatServer('');
          setTimeout(() => {
            history.push('/movies');
          }, 1000);
        }
      })
      .catch((err) => {
        setStatServer('Ошибка отправки данных на сервер');
        setTimeout(() => {
          setStatServer('');
        }, 5000);
        console.log(err)
      })
  };

  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('cards');
    setLoggedIn(false);
  };

  function handleUpdateUser(data) {
    api.loadingUserInfoOnServer({ name: data.name, email: data.email }).then((result) => {
      if (result.data) {
        console.log(result.data)
        setCurrentUser(result.data);
        setErrProfile('Данные успешно изменены!');
        setTimeout(() => {
          setRedactProfile(false);
          setErrProfile('');
        }, 4000);
      }
    }).catch((err) => {
      setErrProfile('Ошибка отправки данных (возможно этот Email уже занят!');
      console.log(err);
    })
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navigation isOpen={status} handleClickCloseNavTab={closeNav} status={'main'} />
            <Main statusHeader={loggedIn} />
            <Footer />
          </Route>
          <Route path="/signup">
            <Register statServer={statServer} handleRegister={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login statServer={statServer} handleLogin={handleLogin} />
          </Route>
          <ProtectedRoute
            path="/movies"
            status={'movies'}
            setFiltText={setFiltText}
            filter={filter}
            isOpen={status}
            message={message}
            loggedIn={loggedIn}
            showMore={showMore}
            statButton={statButton}
            statResult={statResult}
            savedCards={savedCards}
            statMovies={statMovies}
            statPreload={statPreload}
            openNav={openNav}
            component={Movies}
            initialCards={initialCards}
            handleClickCloseNavTab={closeNav}
            handleClickShowMore={handleClickShowMore}
            handleClickSaveMovie={handleClickSaveMovie}
            handleClickDeleteMovie={handleClickDeleteMovie}
            handleClickFilterCheckbox={handleClickFilterCheckbox} />
          <ProtectedRoute
            path="/saved-movies"
            status={'saved-movies'}
            filter={filter}
            message={message}
            loggedIn={loggedIn}
            statResult={statResult}
            statMovies={statMovies}
            likedCards={likedCards}
            component={SavedMovies}
            setFiltText={setFiltText}
            handleClickCloseNavTab={closeNav}
            searchSavedCards={searchSavedCards}
            handleClickDeleteMovie={handleClickDeleteLikedMovie}
            handleClickFilterCheckbox={handleClickFilterCheckbox} />
          <ProtectedRoute
            path="/profile"
            status={'profile'}
            loggedIn={loggedIn}
            isRedact={redactProfile}
            statServer={statErrProfile}
            signOut={signOut}
            component={Profile}
            onRedactClick={handleRedactClick}
            handleClickCloseNavTab={closeNav}
            handleUpdateUser={handleUpdateUser} />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider >
  );
}
export default App;
