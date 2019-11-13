import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Text } = Typography;

export const View = (props) => {
  return (
    <Text {...props}>
      { props.children }
    </Text>
  );
};

View.propTypes  = {
  children: PropTypes.node
};