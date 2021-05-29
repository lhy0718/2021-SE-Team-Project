import React from 'react'
import './LectureTemplate.css'
import LectureTable from './LectureTable'
import AddclassPopup from './AddclassPopup'

const LectureTemplate = ({ columns, lectures, type, name }) => {
  return type === 'T' ? (
    <div className="LectureTemplate">
      <div className="list-title">
        <div className="title">
          {name} 선생님의 수업
          <div className="addButton">
            <AddclassPopup />
          </div>
        </div>
      </div>
      <div className="content">
        <LectureTable
          columns={columns}
          lectures={lectures}
          type={type}
        ></LectureTable>
      </div>
    </div>
  ) : (
    <div className="LectureTemplate">
      <div className="list-title">
        <div className="title">{name} 학생의 수업</div>
      </div>
      <div className="content">
        <LectureTable
          columns={columns}
          lectures={lectures}
          type={type}
        ></LectureTable>
      </div>
    </div>
  )
}

export default LectureTemplate
