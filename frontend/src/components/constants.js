import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import SelectClassNumberPopup from './SelectClassNumberPopup'

export const sharedTemplate = [
  {
    title: '수업명',
    dataIndex: 'lecName',
    key: 'lecName',
    width: '200px',
    align: 'center',
  },
  {
    title: '과목ID',
    dataIndex: 'lecID',
    key: 'lecID',
    width: '100px',
    align: 'center',
  },
  {
    title: '교사명',
    dataIndex: 'teaName',
    key: 'teaName',
    width: '150px',
    align: 'center',
  },

  {
    title: '학년',
    dataIndex: 'grade',
    key: 'grade',
    width: '87px',
    align: 'center',
  },

  {
    title: '반',
    dataIndex: 'classNum',
    key: 'classNum',
    width: '87px',
    align: 'center',
  },

  {
    title: '교시',
    dataIndex: 'time',
    key: 'time',
    width: '177px',
    align: 'center',
  },
  {
    title: '출석체크',
    dataIndex: 'AtdCheck',
    key: 'AtdCheck',
    width: '177px',
    align: 'center',
    render: (text, record) => <SelectClassNumberPopup lecID={record.lecID} />,
  },
]

export const shareLectures = [
  {
    id: '1',
    key: '1',
    lecName: '적분과통계',
    lecID: 12301,
    teaID: 101,
    teaName: '김교수',
    grade: 2,
    classNum: 1,
    time: '월3, 수5, 금3',
    // myAtd: (
    //   <IconButton type="myAtd" size="small">
    //     <ScheduleOutlined />
    //   </IconButton>
    // ),
  },
  {
    id: '2',
    key: '2',
    lecName: '기하와벡터',
    lecID: 12501,
    teaID: 102,
    teaName: '이교수',
    grade: 2,
    classNum: 1,
    time: '화2, 목4',
    // myAtd: (
    //   <IconButton type="myAtd" size="small">
    //     <ScheduleOutlined />
    //   </IconButton>
    // ),
  },

  {
    id: '3',
    key: '3',
    lecName: '영어',
    lecID: 31201,
    teaID: 103,
    teaName: '박교수',
    grade: 2,
    classNum: 1,
    time: '화3, 수6, 목3',
    // myAtd: (
    //   <IconButton type="myAtd" size="small">
    //     <ScheduleOutlined />
    //   </IconButton>
    // ),
  },

  {
    id: '4',
    key: '4',
    lecName: '생명과학1',
    lecID: 45601,
    teaID: 104,
    teaName: '최교수',
    grade: 2,
    classNum: 1,
    time: '월1, 목2',
    // myAtd: (
    //   <IconButton type="myAtd" size="small">
    //     <ScheduleOutlined />
    //   </IconButton>
    // ),
  },
  {
    id: '5',
    key: '5',
    lecName: '물리1',
    lecID: 45602,
    teaID: 105,
    teaName: '이교수',
    grade: 2,
    classNum: 1,
    time: '화3, 금6',
    // myAtd: (
    //   <IconButton type="myAtd" size="small">
    //     <ScheduleOutlined />
    //   </IconButton>
    // ),
  },
]
