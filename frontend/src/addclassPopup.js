import React, { useState } from 'react'
import { Form, Input, Modal, Button } from 'antd';
import './AddclassPopup.css'

const validateMessages = {
  required: '${label}을(를) 입력하세요.',
  types: {
    email: '유효한 이메일이 아닙니다.',
    number: '숫자만 입력할 수 있습니다.',
  },
}

const onFinish = (result) => {
  console.log('finish, result:', result)
}

const onFinishFailed = (result) => {
  console.log('fail, result: ', result)
}

const AddclassPopup = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='AddclassPopup'>
      <Button type='primary' onClick={() => setVisible(true)}>수업 추가</Button>
      <Modal
        title='수업정보 입력'
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key='cancel' htmlType='button' onClick={() => setVisible(false)}>취소</Button>,
          <Button form='addclass-form' key='submit' htmlType='submit' type='primary'>등록</Button>,
        ]}
      >
        <Form name='addclassForm' onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages}>
          <Form.Item label="수업명" name="className" rules={[{required: true}]}>
            <Input />
          </Form.Item>

          <Form.Item label="과목ID" name="classID" rules={[{required: true}]}>
            <Input />
          </Form.Item>

          <Form.Item label="학년" name="grade" rules={[{required: true}]}>
            <Input />
          </Form.Item>

          <Form.Item label="반" name="classNumber" rules={[{required: true}]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default AddclassPopup