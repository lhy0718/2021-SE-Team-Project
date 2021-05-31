import React, { useState } from 'react'
import { Form, Input, Button, Row, InputNumber } from 'antd'
import './Signup.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const inputLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
}

const validateMessages = {
  required: '${label}을(를) 입력하세요.',
  types: {
    email: '유효한 이메일이 아닙니다.',
    number: '숫자만 입력할 수 있습니다.',
  },
}

const Signup = (props) => {
  const [password, setPassword] = useState('')

  const onFinish = (data) => {
    checkEmail(data)
  }

  const onFinishFailed = (result) => {
    console.log('fail, result: ', result)
  }

  const checkEmail = (data) => {
    const url = '/api/users/email-verification/' + data.email
    const headers = {
      accept: '*/*',
    }

    axios
      .post(url, data, {
        headers: headers,
      })
      .then((response) => {
        requestSignup(data)
      })
      .catch((error) => {
        if (error.response.status == 403)
          alert('이메일 주소는 "cau.ac.kr" 으로 끝나야 합니다.')
        else if (error.response.status == 409)
          alert('동일한 이메일 주소로 가입한 계정이 존재합니다.')
        else alert(JSON.stringify(error.response.data))
      })
  }

  const requestSignup = (data) => {
    const url = '/api/auth/sign-up'
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
    }

    axios
      .post(url, data, {
        headers: headers,
      })
      .then((response) => {
        alert('회원가입이 완료되었습니다.')
        props.history.push({
          pathname: '/',
          state: { userObj: response.data },
        })
      })
      .catch((error) => {
        if (error.response.status == 400) {
          let errormsg = ''
          error.response.data.message.map((msg) => {
            errormsg += '입력을 확인하세요: ' + msg + '\n'
          })
          alert(errormsg)
        } else alert(JSON.stringify(error.response.data))
      })
  }

  const checkPassword = (_, value) => {
    if (password === value) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'))
  }

  const checkNum = (_, value) => {
    if (!isNaN(value) && parseInt(value) > 0) {
      if (String(value).length < 9 || String(value).length > 11)
        return Promise.reject(new Error('9~11자리의 숫자를 입력하세요.'))
      return Promise.resolve()
    }
    return Promise.reject(new Error('숫자만 입력 가능합니다.'))
  }

  return (
    <div className="Signup">
      <Row justify="center">
        <h1>회원가입</h1>
      </Row>

      <Form
        {...inputLayout}
        name="signupForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="role"
          initialValue={props.isStudentScreen ? 'STUDENT' : 'TEACHER'}
          hidden
        >
          <Input />
        </Form.Item>

        <Form.Item label="이름" name="fullName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        {props.isStudentScreen && (
          <Form.Item label="학년/반/번호">
            <Input.Group compact>
              <Form.Item
                name="grade"
                rules={[{ required: true, message: '학년을 입력하세요.' }]}
              >
                <InputNumber min={1} max={10} />
              </Form.Item>
              <Form.Item
                name="classId"
                rules={[{ required: true, message: '반을 입력하세요.' }]}
              >
                <InputNumber min={1} max={50} />
              </Form.Item>
              <Form.Item
                name="studentId"
                rules={[{ required: true, message: '번호를 입력하세요.' }]}
              >
                <InputNumber min={1} max={99999999} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        )}

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </Form.Item>

        <Form.Item
          label="비밀번호 확인"
          name="passwordCheck"
          rules={[{ required: true, validator: checkPassword }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="전화번호"
          name="phone"
          rules={[{ required: true, validator: checkNum }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="이메일 주소"
          name="email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input />
        </Form.Item>

        <Row justify="center">
          <Button
            htmlType="button"
            onClick={() => {
              props.history.goBack()
            }}
          >
            이전
          </Button>
          <Button type="primary" htmlType="submit">
            다음
          </Button>
        </Row>
      </Form>
    </div>
  )
}

export default withRouter(Signup)
