import '@testing-library/jest-dom';
import React from 'react';
import {Provider, connect} from 'react-redux'
import {render, screen, fireEvent} from '@testing-library/react'
import Comic from '../../component/Comic'
import {Link, Route, Router, Switch, BrowserRouter} from 'react-router-dom'
import utils from '../../testUtils/testUtils';
import { within } from '@testing-library/dom'
import {createMemoryHistory} from 'history'
import TestUtils from 'react-dom';
import ComicList from '../ComicList';

//Mocking data & Functions
  const data = [ 
    {
      "id": 58587,
      "title": "The Amazing Spider-Man (2015) #21 (Rivera Variant)",
      "issueNumber": 21,
      "description": null,
      "format": "Comic",
      "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/58587/the_amazing_spider-man_2015_21_rivera_variant/rivera_variant?utm_campaign=apiRef&utm_source=90c704a85bddb1baa24fcd3058cc5d3c"
          }
        ],
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
      },
      "images": []
    },
    {
      "id": 40921,
      "title": "Ghost Rider: Official Index to the Marvel Universe GN-TPB (Graphic Novel)",
      "issueNumber": 1,
      "description": "The complete history of the Spirit of Vengeance from\r\nhis earliest appearances to the present day! This\r\nfact-packed volume chronicles every character, team,\r\nplace and piece of equipment &mdash; and provides vital\r\ninformation about all things Ghost Rider! Collecting\r\nthe Ghost Rider material from WOLVERINE, PUNISHER\r\n& GHOST RIDER: OFFICIAL INDEX TO THE MARVEL\r\nUNIVERSE #1-6.\r\n152 PGS./Rated T+ &#133;$19.99",
      "format": "Graphic Novel",
      "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/comics/collection/40921/ghost_rider_official_index_to_the_marvel_universe_gn-tpb_graphic_novel?utm_campaign=apiRef&utm_source=90c704a85bddb1baa24fcd3058cc5d3c"
          }
        ],
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4ec2b1272cee0",
        "extension": "jpg"
      },
      "images": [
        {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4ec2b1272cee0",
          "extension": "jpg"
          }
        ],
      }
 ];

const noData = [];

const setMock = (i, data) => {
  return (<Comic key={i} item={data[i]} id={i} /> ); // Elementen functionality and data is tested here as well.
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