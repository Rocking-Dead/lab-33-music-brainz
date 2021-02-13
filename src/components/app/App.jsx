/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllArtists from '../../containers/home/AllArtists';
import { ThemeModeProvider } from '../../state/themeModeContext';
import Header from '../header/Header';



export default function App() {
  return (
    <>
      <Router>
        <ThemeModeProvider>
          <Header/>
          <Switch>
            <Route exact path="/" component={AllArtists} />
          </Switch>
        </ThemeModeProvider>
      </Router>
    </>
  );
}
