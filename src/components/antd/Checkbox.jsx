import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const useCheckbox = (props) => {
  return (
    <Checkbox {...props}>
      { props.children }
    </Checkbox>
  );
};

useCheckbox.propTypes  = {
  children: PropTypes.node
};

export default useCheckbox;
