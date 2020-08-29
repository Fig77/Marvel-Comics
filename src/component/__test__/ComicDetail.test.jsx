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
import ComicDetal from '../ComicDetail';

test('Shows title of selected comic', () => {
  const title = data[0].title;
  utils.render(<ComicDetal match={{params:{key:0}}} location={{state:{comic:data[0]}}}/>);
  expect(screen.getByText(title)).toBeDefined()
});