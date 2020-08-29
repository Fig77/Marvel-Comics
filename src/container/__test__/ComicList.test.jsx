import '@testing-library/jest-dom';
import React from 'react';
import {Provider, connect} from 'react-redux'
import {render, screen, fireEvent} from '@testing-library/react'
import Comic from '../../component/Comic'
import {Link, Route, Router, Switch, BrowserRouter} from 'react-router-dom'
import utils from '../../testUtils/testUtils';
import data from '../../testUtils/dataMock'
import { within } from '@testing-library/dom'
import {createMemoryHistory} from 'history'
import TestUtils from 'react-dom';
import ComicList from '../ComicList';

//Mocking data & Functions
const noData = [];

const setMock = (i, data) => {
  return (<Comic key={i} item={data[i]} id={i} filterOn={''}/> ); // Elementen functionality and data is tested here as well.
};

function comicMock() {
  let answer = [];
  let i = 0
  while (i < data.length) {
    answer[i] = setMock(i, data);
    i += 1;
  }
  return answer;
}

test('Show Loading message if loading is true', () => {
  const message = 'Loading! wait a sec...';
  utils.render(<ComicList filter={(event)=>{}} loading={true} dataSet={true} comicMap = {comicMock}/>);
  expect(screen.getByText(message)).toBeDefined()
});

test('Shows comics expected from mock', () => {
  const title_1 = 'Ghost Rider: Official Index to the Marvel Universe GN-TPB (Graphic Novel)';
  const title_2 = 'The Amazing Spider-Man (2015) #21 (Rivera Variant)';
  
  utils.render(<ComicList filter={(event)=>{}} loading={false} dataSet={false} comicMap={comicMock}/>);
  expect(screen.getByText(title_1)).toBeDefined();
  expect(screen.getByText(title_2)).toBeDefined();
});

test('Proper routes for 0..1 elements should be in place ', () => {
  const {container, getByTestId} = utils.browserR(<ComicList filter={(event)=>{}} loading={false} dataSet={false} comicMap={comicMock}/>);
  let route_0 = "/comic/0";
  let route_1 = "/comic/1";
  let routeMatcher = [new RegExp(route_0.replace(/:[^\s/]+/g, '([\\w-]+)')), new RegExp(route_1.replace(/:[^\s/]+/g, '([\\w-]+)'))]
  expect(screen.getByTestId('0').href).toMatch(routeMatcher[0]);
  expect(screen.getByTestId('1').href).toMatch(routeMatcher[1]);
});