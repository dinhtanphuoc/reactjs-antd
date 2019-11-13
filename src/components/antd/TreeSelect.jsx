import React from 'react';
import PropTypes from 'prop-types';
import { TreeSelect as TreeSelectAntd } from 'antd';

export const TreeSelect = (props) => {
  return (
    <TreeSelectAntd {...props} />
  );
};

TreeSelect.propTypes  = {
  treeData: PropTypes.array,
  style: PropTypes.object
};

TreeSelect.defaultProps = {
  treeData: [],
  style: {
    width: '100%'
  }
};