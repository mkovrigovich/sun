import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import ReactDOM  from 'react-dom';
import AppRouter from './routes';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import sunApp from './reducers';
// import Home from './views/home';

const store = createStore(sunApp,
    compose(applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const renderApp = (Component) =>
  ReactDOM.render(
      <Provider store={store}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>,
    document.getElementById('app')
  );

renderApp(AppRouter);
if (module.hot) {
  module.hot.accept('./routes', () => {
    require('./routes');
      renderApp(AppRouter);
  });
}

//
// render(
//     <Provider store={store}>
//         <Home/>
//     </Provider>,
//     document.getElementById('app')
// );