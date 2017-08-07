import React from 'react';
import PropTypes from 'prop-types'
import Requirement from './requirement';

const RequirementList = ({list}) => (
  <ul>{list.map(requirement => <Requirement requirement={requirement}/>)}</ul>
);

RequirementList.propTypes = {
  list: PropTypes.array.isRequired
};

export default RequirementList;