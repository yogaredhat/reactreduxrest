import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import {loadCats} from './catActions';
import configureStore from './configureStore';

/* eslint-disable no-console */

const store = configureStore();
store.dispatch(loadCats());

class Game extends React.Component{
  render(){
    return(

        <h1>
          Hey buddy

        </h1>
    );
  }

}

ReactDOM.render(
//<Game/>, you can use game or router any one of them here ..
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
 document.getElementById('app')

);
