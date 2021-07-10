import { shallow } from 'enzyme';
import React from 'react'; 
import Card from './Card';

describe('Card Component', () => {
    it('expect to render Card component ', () => {
        expect(shallow(<Card />).length).toEqual(1);
    });
    it('Render correctly', () => {
        expect(shallow(<Card />)).toMatchSnapshot();
    });
});