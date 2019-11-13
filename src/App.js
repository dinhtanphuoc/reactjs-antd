import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Input,
  TextArea,
  ViewText,
  Select,
  TreeSelect,
  Checkbox,
  DatePicker,
  RadioGroup,
  Radio,
  Form,
  FormItem,
  Row,
  Col,
  createForm
} from './components/antd';
// import createForm from './components/createForm';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Row type="flex">
          <Col sm={24}>
            <Input />
            <ViewText type="warning" strong>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
            </ViewText>
            <TextArea />
            <Select dataSelect={[{value: 1, name: 'abc'}, {value: 2, name: 'def'}]} />
            <TreeSelect treeData={[]} />
            <Checkbox> Checkbox </Checkbox>
            <Form>
              <FormItem>
                <DatePicker />
              </FormItem>
            </Form>
            <RadioGroup>
              <Radio />
            </RadioGroup>
          </Col>
        </Row>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const aaa = createForm({name: 'test', component: App})
export default aaa;
