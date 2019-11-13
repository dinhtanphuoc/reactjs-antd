import React from 'react';
import PropTypes from 'prop-types';
import { Form as FormAntd } from 'antd';

export const Form = (props) => {
  return (
    <FormAntd {...props}>
      { props.children }
    </FormAntd>
  );
};

Form.propTypes  = {
  children: PropTypes.node
};

export const FormItem = (props) => {
  return (
    <FormAntd.Item {...props}>
      { props.children }
    </FormAntd.Item>
  );
};

FormItem.propTypes  = {
  children: PropTypes.node
};

export const createForm = (props) => {
  return FormAntd.create({name: props.name })(props.component);
};
