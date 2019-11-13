import { Form } from 'antd';

const createForm = (props) => {
  return Form.create({name: props.name })(props.component);
};

export default createForm;
