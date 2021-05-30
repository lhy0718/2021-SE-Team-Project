import React from 'react'
import { Form, Input, Button, Row } from 'antd'
import './Login.css'
import userLoginImage from './userlogin.svg'
import axios from 'axios'
import { useHistory } from 'react-router'

//test data
import { shareStudents } from './constants'

const inputLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
}

const buttonLayout = {
  wrapperCol: {
    sm: {
      offset: 6,
      span: 12,
    },
    xs: {
      offset: 0,
      span: 12,
    },
  },
}

const Login = ({ setUserObjCallback }) => {
  const history = useHistory()

  const onFinish = (data) => {
    const url = '/api/auth/login'
    const headers = {
      accept: 'application/json',
      'Content-Type': 'application/json',
    }
    axios
      .post(url, data, {
        headers: headers,
      })
      .then((response) => {
        setUserObjCallback(shareStudents[0])
        history.push('/')
      })
      .catch((error) => {
        alert(JSON.stringify(error.response.data))
      })
  }

  const onFinishFailed = (result) => {
    console.log('fail, result: ', result)
  }

  const moveSignup = (result) => {
    history.push('/signup')
  }

  return (
    <div className="Login">
      <Row justify="center">
        <img
          src={userLoginImage}
          className="UserLoginImage"
          alt="User Login"
          width={100}
        />
      </Row>
      <Form
        {...inputLayout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        name="loginForm"
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
              message: 'ID를 입력하세요.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력하세요.',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...buttonLayout}>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>

        <Form.Item {...buttonLayout}>
          <Button htmlType="button" onClick={moveSignup}>
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
