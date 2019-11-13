import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

const useRow = (props) => {
  return (
    <Row {...props}>
      { props.children }
    </Row>
  );
};

useRow.propTypes  = {
  children: PropTypes.node
};

export default useRow;
