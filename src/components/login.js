import React from 'react'
 import './login.css'
 import { UserOutlined, LockOutlined } from '@ant-design/icons'
 import { Form, Input, Button, Typography , Col, Row, Layout} from 'antd'
 const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function login() {
  return (

    <Layout style={{minHeight: '100vh'}}>
          <Row>
              <Col span={10}>
                  <Form>
                      <Title>Welcome</Title>
                      <p>Enter Your Username and Password</p>
                      <Form.Item name="Username">
                          <Input placeholder='user name' size='large' required prefix={<UserOutlined />} ></Input>
                      </Form.Item>
                      <Form.Item name="Password">
                          <Input.Password size='large' placeholder='input' required prefix={<LockOutlined />} />
                      </Form.Item>
                      <Form.Item>
                          <Button size='large' type='primary' block htmlType='submit'>Login</Button>
                      </Form.Item>
                      <Form.Item>
                          <Button size='large' type='link' block >Forget Password?</Button>
                      </Form.Item>
                  </Form>
              </Col>
              <Col span={14}>
                  <Content>
                  </Content>
                    <Title style={{color:'white', fontSize: '28px'}}>360 Solution For Asset Management</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua.</p>
              </Col>
          </Row>
    </Layout>

    // <div>
         
    // </div>
  )
}

export default login