import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import {
  Router, BrowserRouter,
} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import rootReducer from '../reducer/index';
import data from './dataMock';

// mocking data init on ... mock data.

const utils = (() => {
  function render(ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}, {
    store = rootReducer.store,
    ...renderOptions
  } = {}) {
    function Wrapper({
      // eslint-disable-next-line react/prop-types
      children,
    }) {
      return (
        <Router history={
        history
      }
        >
          {' '}
          <Provider store={
        store
      }
          >
            {' '}
            {
        children
      }
            {' '}

          </Provider>
        </Router>
      );
    }
    return rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    });
  }

  const mockReducer = (state = [data[0]], action) => {
    switch (action.type) {
      case 'TEST': {
        return state;
      }
      default: return state;
    }
  };

  function browserR(
    ui, {
      route = '/',
      history = createMemoryHistory({
        initialEntries: [route],
      }),
    } = {}, {
      store = rootReducer.store,
      ...renderOptions
    } = {},
  ) {
    function Wrapper({
      // eslint-disable-next-line react/prop-types
      children,
    }) {
      return (
        <Router history={
        history
      }
        >
          {' '}
          <BrowserRouter>
            <Provider store={
        store
      }
            >
              {' '}
              {
        children
      }
              {' '}

            </Provider>
          </BrowserRouter>
        </Router>
      );
    }
    return rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    });
  }

  return {
    render, browserR, mockReducer,
  };
})();

export default utils;
