import React from 'react';
import logo from 'logo.svg';
import 'App.css';
import {
  Input,
  InputArea,
  View,
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
  createForm,
  Table,
  Button,
  notification,
  Modal,
  modalType
} from 'components/antd';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Row type="flex">
          <Col sm={24}>
            <Input />
            <View type="warning" strong>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
            </View>
            <InputArea />
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
            <Table />
            <Button />
            <Button onClick={() => notification({ type: "success", message: "Thành công", description: "Click button thành công"}) }>
              Click Noti
            </Button>
            <Modal>
              Modal demo
            </Modal>
            <Button onClick={() => modalType({ type: "confirm", title: "Modal", content: "Click button thành công"}) }>
              Click Modal
            </Button>
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
        <Button onClick={()=> {props.history.push('chuyen-trang');}} > Chuyen trang 456</Button>
      </header>
    </div>
  );
}

export default createForm({name: 'test', component: App});
