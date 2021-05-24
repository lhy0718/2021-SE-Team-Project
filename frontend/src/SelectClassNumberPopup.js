import React, { useState } from 'react'
import { Form, Input, Modal, Button, Row, Col, InputNumber, Select } from 'antd';
import './SelectClassNumberPopup.css'

const SelectClassNumberPopup = (props) => {
  const [visible, setVisible] = useState(false)

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className='SelectClassNumberPopup'>
      <Button type='primary' onClick={() => setVisible(true)}>수업 추가</Button>
      <Modal title='차시 입력' centered visible={visible} onCancel={() => setVisible(false)} onOk={handleOk} onCancel={handleCancel}>
        
      </Modal>
    </div>
  )
}

export default SelectClassNumberPopup