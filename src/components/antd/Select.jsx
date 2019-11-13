import React from 'react';
import PropTypes from 'prop-types';
import { Select as SelectAntd } from 'antd';
import { isArray, map } from 'lodash';

const { Option } = SelectAntd;

const children = (data = []) => {
  return isArray(data) && map(data, (item) => (<Option key={item.value} value={item.value}>{item.name}</Option>));
};

export const Select = (props) => {
  return (
    <SelectAntd {...props}>
      { children(props.dataSelect) }
    </SelectAntd>
  );
};

Select.propTypes  = {
  dataSelect: PropTypes.array,
  style: PropTypes.object
};

Select.defaultProps = {
  dataSelect: [],
  style: {
    width: '100%'
  }
};