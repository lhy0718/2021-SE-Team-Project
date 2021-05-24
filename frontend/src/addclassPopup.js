import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import './AddclassPopup.css'

const AddclassPopup = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='AddclassPopup'>
      <Button type='primary' onClick={() => setVisible(true)}>수업 추가</Button>
      <Modal
        title="수업정보 입력"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  )
}

export default AddclassPopup
