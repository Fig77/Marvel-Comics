import React from 'react';
import {render as rtlRender} from '@testing-library/react'
import rootReducer from '../reducer/index';
import {Link, Route, Router, Switch, BrowserRouter} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

const utils = (() => {
  function render(
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
    render, browserR
  }
})();

export default utils;