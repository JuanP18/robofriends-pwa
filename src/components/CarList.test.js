import React from 'react';
import {shallow} from 'enzyme';
import CardList from './CardList';

describe('Card List Component', () => {
  it('expect to render CardList component', () => {
    const mockRobot = [{
        id:1,
        name: 'Jhon Snow',
        userName: 'JohnJohn',
        email: 'jhon@gamil.com'
    }];  
    expect(shallow(<CardList robots={mockRobot} />)).toMatchSnapshot();
  })
});