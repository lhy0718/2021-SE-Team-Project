import React from 'react'
import { Layout, PageHeader, Typography, Divider } from 'antd'
import { ExportOutlined, BellOutlined } from '@ant-design/icons'

const { Text } = Typography

function Header({ isLogin, name }) {
  const extraButton = [
    <Text strong>{name}님, 안녕하세요!</Text>,
    <Divider
      type="vertical"
      style={{
        height: '30px',
      }}
    />,
    <BellOutlined
      style={{
        fontSize: '25px',
        cursor: 'pointer',
      }}
    />,
    <ExportOutlined
      style={{
        fontSize: '25px',
        cursor: 'pointer',
      }}
    ></ExportOutlined>,
  ]

  return (
    <Layout.Header style={{ background: '#fff', padding: 0 }}>
      <PageHeader
        extra={isLogin ? extraButton : []}
        title="중앙 고등학교 출결관리 시스템"
        style={{
          height: 80,
        }}
      ></PageHeader>
    </Layout.Header>
  )
}

export default Header
