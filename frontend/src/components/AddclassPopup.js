import React, { useState } from 'react'
import {
  Form,
  Input,
  Modal,
  Button,
  Row,
  Col,
  InputNumber,
  Space,
  Select,
} from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import './AddclassPopup.css'

const { Option } = Select

const inputLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

const validateMessages = {
  required: '${label}을(를) 입력하세요.',
  types: {
    email: '유효한 이메일이 아닙니다.',
    number: '숫자만 입력할 수 있습니다.',
  },
}

const checkNum = (_, value) => {
  if (!isNaN(value) && parseInt(value) >= 0) {
    return Promise.resolve()
  }
  return Promise.reject(new Error('숫자만 입력 가능합니다.'))
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
    <div className="AddclassPopup">
      <Button type="primary" onClick={() => setVisible(true)}>
        수업 추가
      </Button>
      <Modal
        title="수업정보 입력"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button
            key="cancel"
            htmlType="button"
            onClick={() => setVisible(false)}
          >
            취소
          </Button>,
          <Button
            form="addclassForm"
            key="submit"
            htmlType="submit"
            type="primary"
          >
            등록
          </Button>,
        ]}
      >
        <Form
          {...inputLayout}
          name="addclassForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
        >
          <Row>
            <Col span={12}>
              <Form.Item
                {...inputLayout}
                label="수업명"
                name="className"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                {...inputLayout}
                label="과목ID"
                name="classID"
                rules={[{ required: true, validator: checkNum }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item
                {...inputLayout}
                label="학년"
                name="grade"
                rules={[{ required: true }]}
              >
                <InputNumber min={1} max={10} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                {...inputLayout}
                label="반"
                name="classNumber"
                rules={[{ required: true }]}
              >
                <InputNumber min={1} max={50} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item label="교시">
                <Form.List name="day/time">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field) => (
                        <Space key={field.key} align="baseline">
                          <Form.Item
                            {...field}
                            style={{ marginBottom: '6px' }}
                            name={[field.name, 'day']}
                            key={[field.key, 'day']}
                            fieldKey={[field.fieldKey, 'day']}
                            rules={[
                              { required: true, message: '요일을 입력하세요.' },
                            ]}
                          >
                            <Select placeholder="요일">
                              <Option value="mon">월</Option>
                              <Option value="tue">화</Option>
                              <Option value="wed">수</Option>
                              <Option value="thu">목</Option>
                              <Option value="fri">금</Option>
                              <Option value="sat">토</Option>
                              <Option value="sun">일</Option>
                            </Select>
                          </Form.Item>

                          <Form.Item
                            {...field}
                            style={{ marginBottom: '6px' }}
                            name={[field.name, 'time']}
                            key={[field.key, 'time']}
                            fieldKey={[field.fieldKey, 'time']}
                            rules={[
                              { required: true, message: '시간을 입력하세요.' },
                            ]}
                          >
                            <InputNumber min={1} max={15} placeholder="교시" />
                          </Form.Item>

                          <MinusCircleOutlined
                            onClick={() => remove(field.name)}
                          />
                        </Space>
                      ))}
                      <Form.Item style={{ marginBottom: '0' }}>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          시간추가
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  )
}

export default AddclassPopup
