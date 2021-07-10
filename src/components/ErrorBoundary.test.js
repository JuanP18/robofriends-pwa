import React from 'react';
import {shallow} from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('Error Boundary Component', () => {
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<ErrorBoundary />)
      wrapper.state({hasError: false});
  })
  it('expect to render ErrorBoundary component' , () => {
      expect(wrapper).toMatchSnapshot();
  });
  it('expect to render ErrorBoundary message' , () => {
    wrapper.state({hasError: true});
});
});
