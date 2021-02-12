import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeModeProvider } from '../../state/themeModeContext';
import Header from '../header/Header';


export default function App() {
  return (
    <>
      <Router>
        <ThemeModeProvider>
          <Header/>
          <Switch>
            {/* <Route exact path="/" component={CharacterPage} />
      <Route exact path="/characters/:id" component={CharacterById} /> */}
          </Switch>
        </ThemeModeProvider>
      </Router>
    </>
  );
}
