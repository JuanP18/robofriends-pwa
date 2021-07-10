import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './MainPage';

describe('Main Page Component', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots:[],
      searchField:'',
      isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps}/>);
  });

  it('expect to render Main Page component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });

  it('filters robots correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots:[{
        id:3,
        name: 'John',
        email: 'John@gmail.com'
      }],
      searchField:'J',
      isPending: false
    };
    const wrapper2 = shallow(<MainPage {...mockProps2}/>);
    expect(wrapper2.instance().filterRobots()).toEqual([{
      id:3,
      name: 'John',
      email: 'John@gmail.com'
    }]);
  });

  it('filters robots correctly 2', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots:[{
        id:3,
        name: 'John',
        email: 'John@gmail.com'
      }],
      searchField:'a',
      isPending: false
    };
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3}/>);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
  });

  it('pending is true', () => {
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots:[],
      searchField:'',
      isPending: true
    };
    const wrapper4 = shallow(<MainPage {...mockProps4}/>);
    expect(wrapper4.props().children[2].props.children).toEqual(<h1>Loading</h1>);
  });

});