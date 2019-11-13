import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

const useCol = (props) => {
  return (
    <Col {...props}>
      { props.children }
    </Col>
  );
};

useCol.propTypes  = {
  children: PropTypes.node
};

export default useCol
