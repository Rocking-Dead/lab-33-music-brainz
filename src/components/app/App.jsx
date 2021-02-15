/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllArtists from '../../containers/home/AllArtists';
import AllReleases from '../../containers/releases/Releases';
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
            <Route exact path="/releases/:artist/:id" component={AllReleases} />
            {/* <Route exact path="//" component={} /> */}
          </Switch>
        </ThemeModeProvider>
      </Router>
    </>
  );
}
