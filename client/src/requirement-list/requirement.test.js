import React from 'react';
import Requirement from './requirement';
import { shallow } from 'enzyme';

describe('<Requirement/> component', () => {
  it('renders without crashing', () => {
    const requirement = {id: 123, text: 'requirement test'};
    const wrapper = shallow(<Requirement requirement={requirement}/>);

    expect(wrapper.text()).toEqual(requirement.text);
  })
});