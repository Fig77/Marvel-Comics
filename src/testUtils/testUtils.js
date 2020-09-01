import React from 'react';
import {render as rtlRender} from '@testing-library/react'
import rootReducer from '../reducer/index';
import {Link, Route, Router, Switch, BrowserRouter} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import data from './dataMock';

// mocking data init on ... mock data.


const utils = (() => {
  function render(ui, { route = '/', history = createMemoryHistory({initialEntries: [route]})} = {}, {
      store = rootReducer.store,
      ...renderOptions
    } = {},
  ) {
    function Wrapper({
      children
    }) {
      return <Router history = {
        history
      } > < Provider store = {
        store
      } > {
        children
      } < /Provider></Router >
    }
    return rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions
    })
  }
      
const mockReducer = (state = [data[0]], acion) => {
  switch (action.type) {
    case 'TEST': {
      return state;
    }
    default: return state;
  }
}
  
function browserR(
    ui, {
      route = '/',
      history = createMemoryHistory({
        initialEntries: [route]
      })
    } = {}, {
      store = rootReducer.store,
      ...renderOptions
    } = {},
  ) {
    function Wrapper({
      children
    }) {
      return <Router history = {
        history
      } > <BrowserRouter>< Provider store = {
        store
      } > {
        children 
      } < /Provider></BrowserRouter></Router >
    }
    return rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions
    })
  }

  return {
    render, browserR, mockReducer
  }
})();

export default utils;