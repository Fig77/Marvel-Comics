import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import React from 'react';
import Comic from '../Comic'
import data from '../../testUtils/dataMock';
import utils from '../../testUtils/testUtils';

test('If its filtering ALL, will show comic.', ()=> {
  utils.render(<Comic key={''} item={data[0]} id={0} filterOn={''}></Comic>);
  expect(screen.getByText(data[0].title)).toBeDefined;
});

test('If its not filtering all or comic, comic dummy will not show..', ()=> {
  utils.render(<Comic key={''} item={data[0]} id={0} filterOn={'Magazine'}></Comic>);
  expect(screen.queryByText(data[0].title)).not.toBeInTheDocument();
});