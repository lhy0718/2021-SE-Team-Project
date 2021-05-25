import React, { useState } from 'react'
import { Table } from 'antd'
import './LectureTable.css'

const LectureTable = ({ lectures, type, columns }) => {
  return (
    <div className="LectureTable">
      <Table
        dataSource={lectures}
        columns={columns}
        pagination={false}
        scroll={{ y: 480 }}
        style={{ height: 500 }}
        rowClassName={(record, index) =>
          index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
        }
      />
    </div>
  )
}
export default LectureTable
