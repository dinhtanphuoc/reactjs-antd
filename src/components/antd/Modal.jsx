import React from 'react';
import PropTypes from 'prop-types';
import { Modal as ModalAntd } from 'antd';

export const Modal = (props) => {
  return (
    <ModalAntd {...props}>
      { props.children }
    </ModalAntd>
  );
};

Modal.propTypes  = {
  children: PropTypes.node
};

export const modalType = (props) => {
  return ModalAntd[props.type]({...props});
};

modalType.propTypes  = {
  type: PropTypes.string
};

modalType.defaultProps = {
  type: 'info'
};