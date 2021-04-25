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

![TeacherUsecaseDiagram](https://user-images.githubusercontent.com/11364584/115982310-0e367880-a5d5-11eb-8498-926ed068cc2d.jpg)

## Use Case Schema

Use Case UC-1 | InquireClassList |
:--:|:--|
Related Requirements| FR-1|
Initiating Actor| 교수자 |
Actor's Goal| 등록된 수업목록을 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자의 수업목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다. |
Postconditions| 없음 |
Flow of Events for Main Success Senario|<- 1. 사용자가 로그인에 성공할시 ``수업목록(UC-1)`` 페이지로 이동한다. <br><- 2. 사용자의 인증정보를 바탕으로 DB에서 수업목록 데이터를 가져와 출력한다. <br><- 3. 수업목록이 출력되고 아래에 ``수업 등록 , 수업 수정, 수업 삭제`` 버튼이 존재한다.<br>-> 4. 사용자가 수업을 클릭한다. <br>  <- 4a. `예` 클릭 시 수강 정보를 DB에 저장하고 `UC-1`로 이동한다.<br>  <- 4b. `아니요` 클릭 시 `UC-1`로 이동한다. <br><- 5. 해당 수업에 대한 ``학생목록(UC-5)`` 페이지로 이동한다.|


Use Case UC-2 | AddClass |
:--:|:--|
Related Requirements| FR-11|
Initiating Actor| 교수자 |
Actor's Goal| 수업목록에 수업을 생성하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자의 수업목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.<br>- 수업 생성버튼이 수업목록페이지에 존재해야 한다. <br>- 수업 생성을 위한 폼이 존재해야 한다.|
Postconditions| - 새로 생성된 수업이 DB에 저장된다. <br>- 생성된 수업을 선택하면 학생목록페이지로 이동한다. |
Flow of Events for Main Success Senario|-> 1. 사용자가  ``수업목록(UC-1)`` 페이지에서 수업 생성 버튼을 클릭한다. <br><- 2. 수업 생성을 위한 폼이 생성된다. <br>-> 3. 수업명, 학년, 반번호를 입력한다. <br>-> 4. 사용자가 수업 생성 완료 버튼을 클릭한다 .<br><- 4a. `예` 클릭 시 수업이 DB에 저장되고 `UC-1`로 이동한다.<br><- 4b.`아니오` 클릭 시 `UC-1`로 이동한다. 


Use Case UC-3 | UpdateClass |
:--:|:--|
Related Requirements| FR-11|
Initiating Actor| 교수자 |
Actor's Goal| 수업목록에서 수업을 수정하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자의 수업목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.<br>- 수업 수정버튼이 수업명 우측에 존재해야 한다. <br>- 수업 수정을 위한 폼이 존재해야 한다.|
Postconditions| - 수정한 수업이 DB에 저장된다. <br>- 수정된 수업을 선택하면 학생목록페이지로 이동한다. |
Flow of Events for Main Success Senario|-> 1. 사용자가  ``수업목록(UC-1)`` 페이지에서 수업 수정 버튼을 클릭한다. <br><- 2. 수업 수정을 위한 폼이 생성된다. <br>-> 3. 수업명, 학년, 반번호를 수정한다. <br>-> 4. 사용자가 수업 수정 완료 버튼을 클릭한다 .<br><- 4a. `예` 클릭 시 수업이 DB에 저장되고 `UC-1`로 이동한다.<br><- 4b. `아니오` 클릭 시 `UC-1`로 이동한다. 


Use Case UC-4 | RemoveClass |
:--:|:--|
Related Requirements| FR-11|
Initiating Actor| 교수자 |
Actor's Goal| 수업목록에서 수업을 삭제하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자의 수업목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.<br>- 수업 삭제버튼이 수업명 우측에 존재해야 한다.|
Postconditions| - 삭제한 수업이 DB에서 삭제된다. |
Flow of Events for Main Success Senario|-> 1. 사용자가  ``수업목록(UC-1)`` 페이지에서 수업 삭제 버튼을 클릭한다. <br><- 2. 수업을 삭제할 것인지 물어보는 팝업이 활성화된다. <br>-> 2a. `예` 클릭 시 수업이 DB에 삭제되고 `UC-1`로 이동한다. <br>-> 2b.`아니오` 클릭 시 `UC-1`로 이동한다. 


Use Case UC-5 | InquireEnrolledStudent |
:--:|:--|
Related Requirements| FR-2 | 
Initiating Actor| 교수자 |
Actor's Goal| 각 수업별로 해당 수업을 수강하는 학생 명단을 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자는 '수업목록' 페이지에서 수업을 선택해야 한다.<br>- 해당 수업의 학생목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.|
Postconditions| 없음 |
Flow of Events for Main Success Senario|-> 1. 사용자가  ``수업목록(UC-1)`` 페이지에서 수업을 선택한다.<br><- 2. 사용자가 선택한 수업정보를 바탕으로 DB에서 해당 수업의 학생목록 데이터를 가져온다.<br><- 3. 학생의 ``사진, 이름, 학번, 출석상태`` 등이 포함된 전체 학생목록을 출력한다.<br><- 4. 학생목록을 ``생성/수정/삭제`` 하고 출석상태를 변경할 수 있는 버튼이 존재한다.|


Use Case UC-6 | CheckAttendance |
:--:|:--|
Related Requirements| FR-3, FR-5, FR-6 | 
Initiating Actor| 교수자 |
Actor's Goal| - 학생들의 출결을 학생별로 '출석', '결석', '지각', '기타'로 각각 체크하기 위함<br>- 수업 종료 후, 출결 현황을 최종 저장하여 학생들의 출결관리를 용이하게 하기 위함 |
Participating Actors| Database |
Preconditions | - 학생 명단은 테이블의 형식으로 화면에 출력하여 식별이 쉽도록 한다.<br>- 각 수업이 시작되기 전, 학생들의 출결 상태는 default로 초기화한다.<br>- 각 출결 상태를 체크하는 것은 토글을 단순히 클릭함으로써 가능하도록 한다.<br>- 출결 상태는 실시간으로 저장한다. <br>- 수업 종료 전에는 언제든지 출결 상태를 변경할 수 있어야 한다.<br>- '수업 종료' 버튼이 있어서 수업 종료를 교수자(사용자)가 승인할 수 있어야 한다.|
Postconditions| 출결 결과를 Database에 최종 저장 |
Flow of Events for Main Success Senario|→ 1. Include:: InquireClassList(UC-1) // 교수자가 본인이 맡은 수업 목록 중 출결체크 할 수업을 선택한다.<br>← 2. Include:: InquireEnrolledStudent(UC-5) // 화면에 해당 수업을 듣는 학생 명단과 그 옆에 출석/결석/지각/기타를 체크할 수 있도록 보여준다.<br>→ 3. 교수자가 학생별로 학생들의 출결 현황에 따라 출석 체크를 진행한다.<br>← 4. 출결 현황을 실시간으로 저장한다.<br>→ 5. 수업이 종료되면 교수자는 ‘수업종료’ 버튼을 누른다.<br>← 6. 교수자는 본인이 맡은 수업 목록이 있는 창으로 다시 나오게 된다.|


Use Case UC-7 | SearchStudent |
:--:|:--|
Related Requirements| FR-2, FR-4 | 
Initiating Actor| 교수자 |
Actor's Goal| 여러 학생 중에서 특정 학생을 이름으로 검색하여 정보를 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자는 수업목록 페이지에서 수업을 선택해야 한다.<br>- 해당 수업의 학생목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.<br>- 검색할 이름을 입력할 수 있는 폼이 존재해야 한다.|
Postconditions| 검색조건을 만족하는 학생들의 학생정보 데이터 목록을 출력한다. |
Flow of Events for Main Success Senario|-> 1. 사용자가 ``수업목록(UC-1)``  페이지에서 수업을 선택한다.<br>-> 2. 사용자로부터 검색할 학생의 이름을 입력받는다.<br><- 3.  DB에서 입력받은 이름과 일치하는 학생정보 데이터만을 `학생목록`으로 출력한다.|


Use Case UC-8 | StudentInfo |
:--:|:--|
Related Requirements| FR-2, FR-4, FR-9 | 
Initiating Actor| 교수자 |
Actor's Goal| -	사용자가 학생에 대한 정보(이름, 학부모 이메일, 출결 현황 등)를 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 학생에 대한 정보가 사전에 Database에 등록되어 있어야 한다.<br>- 학생정보는 개인정보에 해당하므로 조회 시에 계정 비밀번호를 이용하여 인증을 한번 더 거친다.<br>- 정보를 수정할 수 있도록 테이블의 오른쪽 상단에 `수정` 버튼이 있어야 한다.|
Postconditions| 없음 |
Flow of Events for Main Success Senario|→ 1. Include:: SearchStudent(UC-7) // 교수자가 정보 조회할 학생의 이름을 입력한다.<br>→ 2. 사용자 인증을 요구하는 창에 계정 비밀번호를 입력하여 인증을 거친다. <br>← 3. 검색한 이름에 해당하는 학생의 정보를 테이블 형식으로 출력한다.<br>→ 4. 학생 정보를 수정하고 싶을 경우, `수정` 버튼을 클릭한다. <br>← 5. Database에 변경된 사항을 저장한다.|


Use Case UC-9 | StudentPoint
:--:|:--
Related Requirements | FR-8
Initiating Actor | 교수자
Actor's Goal | 학생에 대한 별점을 관리하기 위함
Participating Actors | Database
Preconditions | - 교수자는 정상적으로 로그인이 되어 있어야 한다.<br>- 학생목록을 `학생목록(UC-5)`를 통해 조회할 수 있어야 한다.<br>- 학생 엔터티의 `별점` 버튼을 클릭하여 별점을 부과 할 수 있어야 한다.<br>- 학생목록에서 각 학생의 별점 현황을 확인할 수 있어야 한다.
Postconditions | - 학생의 별점 현황이 DB와 학생목록 페이지에 업데이트 되어야 한다.
Flow of Events for Main Success Senario | -> 1. 교수자가 `InquireEnrolledStudent(UC-5)` 페이지를 요청한다.<br><- 2. 수업의 학생목록을 DB에서 가져와 출력한다.<br>-> 3. 교수자가 학생 엔터티의 `별점` 버튼을 클릭한다.<br><- 4. 학생에게 몇개의 별점을 줄 것인지 물어보는 팝업이 활성화 된다.<br>-> 5. 교수가 별점을 입력하고 `별점 부과`버튼을 누른다.<br>-> 6. 학생에게 부과된 별점이 DB에 적용된다.<br><- 7. 업데이트된 별점이 `UC-5` 페이지에 바로 적용된다.
Flow of Events for Extensions (Alternate Scenarios) | -> 5a. 교수가 팝업에서 `취소` 버튼을 클릭하면 `UC-5` 화면으로 다시 돌아간다.

Use Case UC-10 | ClassNotice
:--:|:--
Related Requirements | FR-9
Initiating Actor | 교수자
Actor's Goal | 수업 공지사항을 생성하고 발송하기 위함
Participating Actors | 서버
Preconditions | - 교수자는 정상적으로 로그인이 되어 있어야 한다.<br>- 담당하고 있는 수업목록을 `InquireClassList(UC-1)`를 통해 조회할 수 있어야 한다.<br>- 수업 엔터티의 `공지사항` 버튼을 클릭하여 공지사항을 게시 할 수 있어야 한다.
Postconditions | - 서버에서 해당 수업의 모든 학생에게 공지사항을 발송할 수 있어야 한다.
Flow of Events for Main Success Senario | -> 1. 교수자가 `UC-1` 페이지를 요청한다.<br><- 2. 수업목록을 DB에서 가져와 출력한다.<br>-> 3. 교수자가 수업 엔터티의 `공지사항` 버튼을 클릭한다.<br><- 4. 공지사항의 제목과 내용 등을 입력할 수 있는 팝업이 활성화 된다.<br>-> 5. 교수가 공지를 입력하고 `공지하기` 버튼을 누른다.<br><- 6. 서버는 해당 수업의 모든 학생에게 공지사항을 발송한다.<br><- 7. 공지사항이 발송되었다는 팝업을 출력한다.
Flow of Events for Extensions (Alternate Scenarios) | -> 5a. 교수가 팝업에서 `취소` 버튼을 클릭하면 `UC-1` 화면으로 다시 돌아간다.

Use Case UC-11 | RejectStudent
:--:|:--
Related Requirements | FR-11
Initiating Actor | 교수자
Actor's Goal | 잘못 수강 신청한 학생을 학생목록에서 삭제하기 위함
Participating Actors | Database
Preconditions | - 교수자는 정상적으로 로그인이 되어 있어야 한다.<br>- 수강신청한 학생을 `InquireEnrolledStudent(UC-5)` 를 통해 조회할 수 있어야 한다.<br>- 수강신청한 학생의 정보를 `StudentInfo(UC-8)`을 통해 알 수 있어야 한다.<br> 
Postconditions | - 수강신청 거부당한 학생이 학생목록에서 삭제된다.
Flow of Events for Main Success Senario | -> 1. 교수자가 `StudentInfoUC-8` 페이지를 요청한다.<br><- 2. 학생목록을 DB에서 가져와 출력한다.<br>-> 3. 교수자가 학생명 좌측에 있는 거절 버튼을 클릭한다. <br><- 4. 학생의 수강신청을 거절할 것인지 묻는 팝업이 활성화 된다.<br><- 4a. `예` 클릭 시 학생을 학생목록에서 삭제하고 `InquireEnrolledStudent(UC-5)`로 이동한다.<br>  <- 4b. `아니요` 클릭 시 `InquireEnrolledStudent(UC-5)`로 이동한다.
