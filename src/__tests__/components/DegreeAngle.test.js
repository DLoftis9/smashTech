import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import DegreeAngle from '../../components/DegreeAngle';

describe('DegreeAngle', () => {
  it('renders without crashing', () => {
    shallow(<DegreeAngle />);
  });
});
