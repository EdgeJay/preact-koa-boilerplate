import React from 'react';
import { Router, Route } from 'preact-router';
import { Provider } from 'preact-redux';
import { syncHistoryWithStore } from 'preact-router-redux';
import { Link } from 'preact-router/match';
import { createBrowserHistory } from 'history';
import store from '../stores';
import '../styles/app.css';
import Hello from '../Hello';
import Foo from '../Foo';
import Counter from '../Counter';

const browserHistory = createBrowserHistory();

const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link activeClassName="active" href="/">Home</Link>
          <Link activeClassName="active" href="/foo">Foo</Link>
          <Link activeClassName="active" href="/counter">Counter</Link>
        </nav>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Hello} />
            <Route path="/foo" component={Foo} />
            <Route path="/counter" component={Counter} />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
