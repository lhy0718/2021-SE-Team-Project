# Teacher Use case

## Deriving Use Cases from System Requirements

| Actor  | Actor's Goal                               | Use Case Name    |
| ------ | ---------------------------------------------------- | ---------------- |
| 교수자 | 등록된(담당하고 있는) 수업 목록을 조회하기 위함	| InquireClassList (UC-1) |
| 교수자 | 수업 목록에서 수업을 추가하기 위해 서버에 요청을 보내기 위함 | AddClass (UC-2) |
| 교수자 | 수업 목록에서 수업을 수정하기 위해 서버에 요청을 보내기 위함 | UpdateClass (UC-3) |
| 교수자 | 수업 목록에서 수업을 삭제하기 위해 서버에 요청을 보내기 위함 | RemoveClass (UC-4) |
| 교수자 | 각 수업별로 해당 수업을 수강하는 학생 명단을 조회하기 위함 | InquireEnrolledStudent (UC-5) |
| 교수자 | 학생의 출결 상태를 출석 상태로 변경하기 위함 | CheckAttendance (UC-6) |
| 교수자 | 학생의 출결 상태를 지각 상태로 변경하기 위함 | CheckAttendance (UC-6) |
| 교수자 | 학생의 출결 상태를 결석 상태로 변경하기 위함 | CheckAttendance (UC-6) |
| 교수자 | 학생의 출결 상태를 공결 상태로 변경하기 위함 | CheckAttendance (UC-6) |
| 교수자 | 해당 수업을 듣는 학생중에서 검색조건에 부합하는 학생만을 출력하기 위함 | SearchStudent (UC-7) |
| 교수자 | 학생의 정보(개인정보, 출결현황 등)를 조회하기 위함 | StudentInfo (UC-8) |
| 교수자 | 학생에 대한 별점을 관리하기 위함 | StudentPoint (UC-9) |
| 교수자 | 수업 공지사항을 생성하고 발송하기 위함 | ClassNotice (UC-10) |
| 교수자 | 수업 내 학생 목록에서 학생을 삭제하기 위함 | RejectStudent(UC-11) |


## Use Case Diagram

## Use Case Schema

Use Case UC-1 | InquireClassList |
:--:|:--|
Related Requirements| FR-1|
Initiating Actor| 교수자(사용자) |
Actor's Goal| 등록된 수업목록을 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자의 수업목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.|
Postconditions| 없음 |
Flow of Events for Main Success Senario|<- 1. 사용자가 로그인에 성공할시 ``수업목록(UC-1)`` 페이지로 이동한다. <br><- 2. 사용자의 인증정보를 바탕으로 DB에서 수업목록 데이터를 가져와 출력한다. <br><- 3. 수업목록이 출력되고 아래에 ``수업 등록 , 수업 수정, 수업 삭제`` 버튼이 존재한다.<br>-> 4. 사용자가 수업을 클릭한다.<br><- 5. 해당 수업에 대한 ``학생목록(UC-5)`` 페이지로 이동한다.|여부를 입력받는다.<br> <- 4-a. `예` 클릭 시 수강 정보를 DB에 저장하고 `UC-1`로 이동한다.<br> &nbsp;&nbsp;&nbsp;&nbsp; 4-b. `아니요` 클릭 시 `UC-1`로 이동한다. |

Use Case UC-9 | StudentPoint
:--:|:--
Related Requirements | FR-8
Initiating Actor | 교수자
Actor's Goal | 학생에 대한 별점을 관리하기 위함
Participating Actors | Database
Preconditions | - 교수자는 정상적으로 로그인이 되어 있어야 한다.<br>- 학생목록을 `학생목록(UC-5)`를 통해 조회할 수 있어야 한다.<br>- 학생 엔터티의 `별점` 버튼을 클릭하여 별점을 부과 할 수 있어야 한다.<br>- 학생목록에서 각 학생의 별점 현황을 확인할 수 있어야 한다.
Postconditions | - 학생의 별점 현황이 DB와 학생목록 페이지에 업데이트 되어야 한다.
Flow of Events for Main Success Senario | -> 1. 교수자가 `UC-5` 페이지를 요청한다.<br><- 2. 수업의 학생목록을 DB에서 가져와 출력한다.<br>-> 3. 교수자가 학생 엔터티의 `별점` 버튼을 클릭한다.<br><- 4. 학생에게 몇개의 별점을 줄 것인지 물어보는 팝업이 활성화 된다.<br>-> 5. 교수가 별점을 입력하고 `별점 부과`버튼을 누른다.<br>-> 6. 학생에게 부과된 별점이 DB에 적용된다.<br><- 7. 업데이트된 별점이 `UC-5` 페이지에 바로 적용된다.
Flow of Events for Extensions (Alternate Scenarios) | -> 5a. 교수가 팝업에서 `취소` 버튼을 클릭하면 `UC-5` 화면으로 다시 돌아간다.

Use Case UC-10 | ClassNotice
:--:|:--
Related Requirements | FR-9
Initiating Actor | 교수자
Actor's Goal | 수업 공지사항을 생성하고 발송하기 위함
Participating Actors | 서버
Preconditions | - 교수자는 정상적으로 로그인이 되어 있어야 한다.<br>- 담당하고 있는 수업목록을 `InquireClassList(UC-1)`를 통해 조회할 수 있어야 한다.<br>- 수업 엔터티의 `공지사항` 버튼을 클릭하여 공지사항을 게시 할 수 있어야 한다.
Postconditions | - 서버에서 해당 수업의 모든 학생에게 공지사항을 발송할 수 있어야 한다.
Flow of Events for Main Success Senario | -> 1. 교수자가 `UC-1` 페이지를 요청한다.<br><- 2. 수업목록을 DB에서 가져와 출력한다.<br>-> 3. 교수자가 수업 엔터티의 `공지사항` 버튼을 클릭한다.<br><- 4. 공지사항의 제목과 내용 등을 입력할 수 있는 팝업이 활성화 된다.<br>-> 5. 교수가 공지를 입력하고 `공지하기` 버튼을 누른다.<br>-> 6. 서버는 해당 수업의 모든 학생에게 공지사항을 발송한다.<br><- 7. 공지사항이 발송되었다는 팝업을 출력한다.
Flow of Events for Extensions (Alternate Scenarios) | -> 5a. 교수가 팝업에서 `취소` 버튼을 클릭하면 `UC-1` 화면으로 다시 돌아간다.
