import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import {Provider, connect} from 'react-redux'
import {render, screen, fireEvent} from '@testing-library/react'
import Comic from '../../component/Comic'
import {Link, Route, Router, Switch, BrowserRouter} from 'react-router-dom'
import utils from '../../testUtils/testUtils';
import data from '../../testUtils/dataMock'
import TestUtils from 'react-dom';
import ComicDetail from '../ComicDetail';

beforeEach(() => {
  utils.render(<ComicDetail match={{params:{key:1}}} location={{state:{comic:data[1]}}}/>);
});

describe('During rendering of specific comic, particular data should be rendered', () => {
  const num = data[1].issueNumber.toString();
  const POSITIVES = [[data[1].title,' Shows title of selected comic'],[data[1].description,'Shows description of selected comic'],[num,' Shows issue of selected comic']];
  let i = 0;
  while (i < POSITIVES.length) {
   let aux = POSITIVES[i][0];
   test(POSITIVES[i][1], () => {
    expect(screen.getByText(aux)).toBeDefined()
   });
   i += 1;
  };
});

describe('During rendering of specific comic, other comic data should not be rendered', () => {
  const nnum = data[0].issueNumber.toString();
  const NEGATIVES = [[data[0].title,'Should NOT show title of selected comic'],[data[0].description,'Should NOT show description of selected comic'],[nnum,'Should NOT show issue of selected comic']];
  let i = 0;
  while (i < NEGATIVES.length) {
   let aux = NEGATIVES[i][0];
   test(NEGATIVES[i][1], () => {
    expect(screen.queryByText(aux)).not.toBeInTheDocument();
   });
   i += 1;
  };
});
