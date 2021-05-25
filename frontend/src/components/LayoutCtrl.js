import React, { useState } from 'react'
import 'antd/dist/antd.css'
import Sider from './Sider'
import Header from './Header'
import { Layout } from 'antd'
const { Content } = Layout

function LayoutCtrl(props) {
  const [isLogin, setLogin] = useState(!!props.userObj)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider isLogin={isLogin} type={props.userObj.type} />{' '}
      {/*왼쪽 사이드메뉴*/}
      <Layout>
        <Header isLogin={isLogin} name={props.userObj.name} /> {/*헤더*/}
        <Content
          style={{
            marginTop: '15px',
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutCtrl
