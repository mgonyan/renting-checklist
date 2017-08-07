import React from 'react';
import PropTypes from 'prop-types'

const Requirement = ({requirement}) => (
  <li key={requirement.id}>{requirement.text}</li>
);

Requirement.propTypes = {
  requirement: PropTypes.object.isRequired
};

export default Requirement;