import React from 'react';
import {shallow} from 'enzyme';
import CounterButton from './CounterButton'; 

describe('Counter Button Component', () => {
  it('expect to render CounterButton component' , () => {
      const mockColor = 'red';
      expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
  });

  it('correctly increments the counter' , () => {
      const mockColor = 'red';
      const wrapper = shallow(<CounterButton color={mockColor}/>);
      
      wrapper.find('[id="counter"]').simulate('click');
      wrapper.find('[id="counter"]').simulate('click');
      expect(wrapper.state()).toEqual({count:3});
      wrapper.find('[id="counter"]').simulate('click');
      expect(wrapper.state()).toEqual({count:4});
      wrapper.find('[id="counter"]').simulate('keypress');
      expect(wrapper.state()).toEqual({count:4});
      expect(wrapper.props().color).toEqual('red');
  });

  it('the counter is not updated' , () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ count: 1}, { count: 1});
    expect(shouldUpdate).toEqual(false);
});
});