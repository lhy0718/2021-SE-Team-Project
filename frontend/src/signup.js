import React, { useState } from 'react'
import { Form, Input, Button, Row } from 'antd'
import './Signup.css'
import { withRouter } from 'react-router-dom'

const inputLayout = {
  labelCol: { span: 6, },
  wrapperCol: { span: 12, },
}

const buttonLayout = {
  wrapperCol:{
    sm: {
      offset: 6,
      span: 12,
    },
    xs: {
      offset: 0,
      span: 12,
    },
  }
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

  const onFinish = (result) => {
    console.log('finish, result:', result)
  }
  
  const onFinishFailed = (result) => {
    console.log('fail, result: ', result)
  }

  const checkPassword = (_, value) => {
    if(password === value){
      return Promise.resolve()
    }
    return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'))
  }

  const checkNum = (_, value) => {
    if(!isNaN(value) && parseInt(value) > 0){
      return Promise.resolve()
    }
    return Promise.reject(new Error('숫자만 입력 가능합니다.'))
  }

  return (
    <div className='Signup'>
      <Row justify='center'>
        <h1>회원가입</h1>
      </Row>
      <Form {...inputLayout} name='signup-form' onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages}>
        <Form.Item label="이름" name="name" rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item label="아이디" name="id" rules={[{required: true}]}>
          <Input />
        </Form.Item>
        <Form.Item label="비밀번호" name="password" rules={[{required: true}]}>
          <Input.Password onChange={ (e)=>{setPassword(e.target.value)} }/>
        </Form.Item>
        <Form.Item label="비밀번호 확인" name="password-check" rules={[{required: true, validator: checkPassword}]}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="전화번호" name="phone" rules={[{required: true, validator: checkNum}]}>
          <Input />
        </Form.Item>
        <Form.Item label="이메일 주소" name="email" rules={[{required: true, type: 'email'}]}>
          <Input />
        </Form.Item>
        <Form.Item {...buttonLayout}>
          <Row justify='center'>
            <Button htmlType="button" onClick={props.history.goBack()}>이전</Button>
            <Button type="primary" htmlType="submit">다음</Button>
          </Row>
        </Form.Item>
      </Form>
    </div>
  )
}

export default withRouter(Signup)
