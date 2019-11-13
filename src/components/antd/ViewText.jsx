import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Text } = Typography;

const useViewText = (props) => {
  return (
    <Text {...props}>
      { props.children }
    </Text>
  );
};

useViewText.propTypes  = {
  children: PropTypes.node
};

export default useViewText;
