import React from 'react';
import PropTypes from 'prop-types';
import { TreeSelect } from 'antd';

const useTreeSelect = (props) => {
  return (
    <TreeSelect {...props} />
  );
};

useTreeSelect.propTypes  = {
  treeData: PropTypes.array,
  style: PropTypes.object
};

useTreeSelect.defaultProps = {
  treeData: [],
  style: {
    width: '100%'
  }
};

export default useTreeSelect;
