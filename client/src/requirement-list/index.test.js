import React from 'react';
import RequirementList from './index';
import { shallow } from 'enzyme';

describe('<RequirementList/> component', () => {
    it('renders without crashing', () => {
      const list = [];
      shallow(<RequirementList list={list}/>);
    })
});