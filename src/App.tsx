import './App.scss';
import React, { Component } from "react";
import {
  Router
} from "react-router-dom";
import { AppHeaderLayout } from './layout/AppHeaderLayout';
import createHistory from "history/createBrowserHistory";
import { AppContent } from './layout/AppContent';
import { AppFooter } from './layout/AppFooter';

class App extends Component {
  goTo = route => {
    // this.props.dispatch(push(route.url));
  };
  render() {
    // const { location } = this.props;
    // console.log("location", location);
    const history = createHistory();
    return (
      <Router history={history}>
        <React.Fragment>
          <AppHeaderLayout>
          </AppHeaderLayout>
        </React.Fragment>
        <React.Fragment>
          <AppContent></AppContent>
        </React.Fragment>
        <React.Fragment>
          <AppFooter></AppFooter>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;