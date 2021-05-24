import React, { useState } from 'react'
import { Form, Input, Button, Row, InputNumber } from 'antd'
import './Signup.css'
import { withRouter } from 'react-router-dom'

const inputLayout = {
  labelCol: { span: 6, },
  wrapperCol: { span: 12, },
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

      <Form {...inputLayout} name='signupForm' onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages}>
        <Form.Item label="이름" name="name" rules={[{required: true}]}>
          <Input />
        </Form.Item>

        <Form.Item label="아이디" name="id" rules={[{required: true}]}>
          <Input />
        </Form.Item>
        {props.isStudentScreen &&
          <Form.Item label="학년/반/번호" >
            <Input.Group compact>
              <Form.Item name='grade' rules={[{required: true, message: '학년을 입력하세요.'}]}>
                <InputNumber min={1} max={10} />
              </Form.Item>
              <Form.Item name='classNumber' rules={[{required: true, message: '반을 입력하세요.'}]}>
                <InputNumber min={1} max={50} />
              </Form.Item>
              <Form.Item name='studentNumber' rules={[{required: true, message: '번호를 입력하세요.'}]}>
                <InputNumber min={1} max={99999999} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        }
      
        <Form.Item label="비밀번호" name="password" rules={[{required: true}]}>
          <Input.Password onChange={ (e)=>{setPassword(e.target.value)} }/>
        </Form.Item>

        <Form.Item label="비밀번호 확인" name="passwordCheck" rules={[{required: true, validator: checkPassword}]}>
          <Input.Password />
        </Form.Item>

        <Form.Item label="전화번호" name="phone" rules={[{required: true, validator: checkNum}]}>
          <Input />
        </Form.Item>

        <Form.Item label="이메일 주소" name="email" rules={[{required: true, type: 'email'}]}>
          <Input />
        </Form.Item>

        <Row justify='center'>
          <Button htmlType="button" onClick={()=>{props.history.goBack()}}>이전</Button>
          <Button type="primary" htmlType="submit">다음</Button>
        </Row>
      </Form>
    </div>
  )
}

export default withRouter(Signup)
