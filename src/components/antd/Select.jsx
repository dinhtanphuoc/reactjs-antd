import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { isArray, map } from 'lodash';

const { Option } = Select;

const children = (data = []) => {
  return isArray(data) && map(data, (item) => (<Option key={item.value} value={item.value}>{item.name}</Option>));
};

const useSelect = (props) => {
  return (
    <Select {...props}>
      { children(props.dataSelect) }
    </Select>
  );
};

useSelect.propTypes  = {
  dataSelect: PropTypes.array,
  style: PropTypes.object
};

useSelect.defaultProps = {
  dataSelect: [],
  style: {
    width: '100%'
  }
};

export default useSelect;
