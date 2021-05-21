# Student Use Cases 

## Deriving Use Cases from System Requirements

| Actor  | Actor's Goal                               | Use Case Name    |
| ------ | ---------------------------------------------------- | ---------------- |
| 학생 | 학교에 등록된 수업목록을 조회하기 위함	| AvailableClassList(UC-1) |
| 학생 | 교수자로부터 개설된 수업에 수강을 신청하기 위함 | RegisterClass(UC-2) |
| 학생 | 수강중인 수업목록을 조회하기 위함 | MyClassList(UC-3) |
| 학생 | 수강중인 수업의 공지 및 학생정보(출결, 별점)를 확인하기 위함 | MyClassInfo(UC-4) |

## Use Case Diagram


![제목을-입력해주세요 -001 (3)](https://user-images.githubusercontent.com/64057843/115967306-e7dcf280-a56c-11eb-9bca-74cc2accc7ec.jpg)

## Use Case Schema

|Use Case UC-1 | AvailableClassList |
|:--:|:--|
|Related Requirements| FR-1, FR-2 | 
|Initiating Actor| 학생(사용자) |
|Actor's Goal| 학교에 등록된 수업목록을 조회하기 위함 |
|Participating Actors| Database |
|Preconditions |- 학생은 정상적으로 로그인이 완료되어 있어야 한다. <br> - 계정 정보에 학교 정보(학교명)가 올바르게 포함되어 있어야 한다. |
|Postconditions|각 카테고리(수업명, 교수자명, 요일 등) 정보로 검색이 가능해야 한다. |
|Flow of Events for Main Success Senario|-> 1. 학생이 수업목록 조회를 요청한다.<br><- 2. 계정 정보에 등록되어있는 학교의 교수자가 등록한 수업들을 DB에서 가져와 테이블 형식으로 출력한다.<br>-> 3. 특정 수업을 검색하기 원할 경우, 검색할 카테고리(수업명, 교수자명, 요일 등)를 선택하고 검색창에 입력한다.<br><- 4. DB에서 검색조건과 일치하는 수업만을 다시 테이블 형식으로 출력한다.  |
---

Use Case UC-2 | RegisterClass |
:--:|:--|
Related Requirements| FR-1, FR-2, FR-3 | 
Initiating Actor| 학생(사용자) |
Actor's Goal| 교수자로부터 개설된 수업에 수강을 신청하기 위함 |
Participating Actors| Database |
Preconditions | - 학생은 정상적으로 로그인이 완료되어 있어야 한다.<br> - 개설된 수업목록을 `UC-1`을 통해 조회할 수 있어야 한다.<br> - 수업을 클릭하여 수강 신청 할 수 있어야 한다. |
Postconditions| `UC-1`로 이동한다. |
Flow of Events for Main Success Senario|-> 1. 학생이 개설된 수업에 수강을 신청한다.<br> <- 2. 수강신청을 확인하는 메세지를 출력한다. `예/아니요`<br> -> 3. 사용자로부터 확인여부를 입력받는다.<br> <- 4-a. `예` 클릭 시 수강 정보를 DB에 저장하고 `UC-1`로 이동한다.<br> &nbsp;&nbsp;&nbsp;&nbsp; 4-b. `아니요` 클릭 시 `UC-1`로 이동한다. |
---

|Use Case UC-3 | MyClassList |
|:--:|:--|
|Related Requirements| FR-4 | 
|Initiating Actor| 학생(사용자) |
|Actor's Goal| 수강중인 수업목록을 조회하기 위함 |
|Participating Actors| Database |
|Preconditions |- 학생은 정상적으로 로그인이 완료되어 있어야 한다.<br>- 각 학생별로 본인이 `UC-2`에 의해 수강 신청했던 과목이 DB에 저장되어있어야 한다. |
|Postconditions|`UC-4`를 사용가능해야 한다. |
|Flow of Events for Main Success Senario|-> 1, 학생이 본인이 수강중인 수업목록 조회를 요청한다.<br><- 2. 수강중인 수업목록을 DB에서 가져와 테이블 형식으로 출력한다.<br>-> 3. 학생 본인이 수강중인 수업에 대한 정보(공지사항, 출결 현황 등)를 알고 싶을 경우 해당하는 수업명을 클릭한다.<br><- 4. Include::MyClassInfo(UC-4) 수업에 대한 정보를 DB에서 가져와 화면에 출력한다. |
---

Use Case UC-4 | MyClassInfo |
:--:|:--|
Related Requirements| FR-5, FR-6, FR-7, FR-8 | 
Initiating Actor| 학생(사용자) |
Actor's Goal| 수강중인 수업의 공지 및 학생정보(출결, 별점)를 확인하기 위함 |
Participating Actors| Database |
Preconditions | - 학생은 정상적으로 로그인이 완료되어 있어야 한다.<br> - 수강중인 수업정보가 데이터베이스에 정상적으로 등록되어 있어야 한다.  |
Postconditions| `UC-3`로 이동한다. |
Flow of Events for Main Success Senario| -> 1. 학생이 수강정보를 요청한다.<br> <- 2. 수강중인 수업에 대한 공지사항과 학생정보를 DB에 요청한다. <br> <- 3. 공지사항 및 학생정보를 화면에 출력한다.|
