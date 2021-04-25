# Teacher Domain Model

## UC-1(InquireClassList)

### Extracting the Responsibilities

| Responsibility Description | Type | Concept Name  |
| - | - | - |
| UC-1과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D | Controller |
| 로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업목록을 요청한다. | D | DB Connection |
| 가져온 데이터를 페이지(화면)에 출력한다. | D | Page Maker |
| DB로부터 받아온 수업목록 | K | 수업목록 |
| 수업명을 클릭하면 해당 페이지로 넘어간다. | D | 수업선택 |
| 수업CRUD 버튼 | K | 수업_CRUD_Button  |
| 불러온 정보를 보여주는 페이지  | K | View |

### Extracting the Associations

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| View <-> DB Connection  | 수업 목록을 View에 전달한다.  | 데이터 전달        |
| View <-> Page Maker  | View를 화면에 출력한다. | 출력      |
| Controller <-> 수업_CRUD_Button  |수업 CRUD에 해당하는 요청을 전달한다. | 요청 전달     |
| DB Connection <-> 수업 목록  | DB에 저장된 수업 목록을 주고받는다. | 요청 전달     |
|수업선택 <-> Controller|사용자가 선택한 수업에 대한 정보 요청을 전달한다. |요청전달|

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 어떤 요청이 들어왔을 때 로그인이 되어있는지 확인한다. |
| 수업 목록  | 수업 이름, 수업 요일, 수업 시간 , 수강 인원 등  | 각 수업과 관련된 세부적인 정보           |

![UC-1](https://user-images.githubusercontent.com/76427521/115992121-fd9ef600-a606-11eb-88d4-eeff64afc0c9.PNG)


## UC-2 : AddClass

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-2과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 수업 정보를 입력한다. | D | 수업생성 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
UI를 통해 현재 상태를 화면에 표현한다.|	D|	Page Maker
현재 상태를 보여주는 UI|	K	|View

### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> DB Connection|	Controller는 DB Connection으로 request를 넘긴다.| 요청 전달
Controller <-> Page Maker|	Controller는 Page Maker에게 요청을 보내고 UI를 받는다.| 요청 전달
수업생성 요청 <-> Controller|	수업생성 요청을 Controller에게 전달한다.|	요청 전달
Page Maker <-> View| View를 화면에 출력한다.	|출력



### Extracting Attributes
Concept|Attributes|Attributes Description
-|-|-
수업정보|	수업 정보 record|	사용자가 입력한 수업 정보(수업명, 학년, 반번호)

![1908_1](https://user-images.githubusercontent.com/64057843/115989508-b3fbde80-a5f9-11eb-9d3e-6ba4961b0ab9.png)


## UC-3 : UpdateClass

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-3과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 수업 정보를 입력한다. | D | 수업수정 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
UI를 통해 현재 상태를 화면에 표현한다.|	D|	Page Maker
현재 상태를 보여주는 UI|	K	|View

### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> DB Connection|	Controller는 DB Connection으로 request를 넘긴다.| 요청전달
Controller <-> Page Maker|	Controller는 Page Maker에게 요청을 보내고 UI를 받는다.|	요청 전달
수업 수정 요청 <-> Controller|	수업 추가 요청을 Controller에게 전달한다.|	요청 전달
Page Maker <-> View| View를 화면에 출력한다.	|출력

### Extracting Attributes
Concept|Attributes|Attributes Description
-|-|-
수업정보|	수업 정보 record|	사용자가 입력한 수업 정보(수업명, 학년, 반번호)

![1908_2](https://user-images.githubusercontent.com/64057843/115989509-b4947500-a5f9-11eb-873c-e6d0a1b7d4cb.png)


## UC-4 : RemoveClass

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-4과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 수업 삭제버튼을 클릭한다. | D | 수업삭제 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
현재 상태를 보여주는 UI|	K	|View
UI를 통해 현재 상태를 화면에 표현한다.|	D|	Page Maker
삭제 성공 여부를 확인한다.|	D|	Valid Checker
삭제 성공여부를 알리는 팝업창을 보인다.	|D|	Pop-up Maker

### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> Page Maker|	Controller는 Page Maker에게 요청을 보내고 UI를 받는다.|	요청 전달
Page Maker <-> View| View를 화면에 출력한다.	|출력
Controller<->DB Connection|	Controller는 DB Connection으로 request를 넘긴다.|요청전달
수업삭제 요청 <-> Controller|	수업 삭제 요청을 Controller에게 전달한다.|	요청 전달
Valid Checker<-> DB connection|	DB connection에서 탈퇴 요청된 데이터가 잘 제거되어있는지의 여부를 Valid Checker애 넘겨준다.|	유효 여부 전달
Valid Checker<-> Pop-up Maker|	Pop-up Maker는 Valid Checker에게 정보를 받아 성공/실패에 관한 팝업창을 만든다.|생성

### Extracting Attributes

![1908_3](https://user-images.githubusercontent.com/64057843/115989512-b52d0b80-a5f9-11eb-853c-bd7c5f8b7ffd.png)


### UC-5(InquireEnrolledStudent)

### Extracting the Responsibilities**

| Responsibility Description | Type | Concept Name  |
| - | - | - |
| UC-5와 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 로그인 상태를 확인하여, 현재 수업 정보를 바탕으로 DB 학생목록을 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다.                                 | D    | Page maker |
| DB로부터 받아온 학생목록 | K    | 학생목록 |
| 학생을 선택하여 ``학생정보조회(UC-5)``로 이동한다. | D    | 학생선택 |
| 학생 CRUD 버튼                               | K    | 학생_CRUD_Button          |
| 불러온 정보를 보여주는 페이지                                 | K    | View          |

### Extracting the Associations

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| Controller <-> 학생목록  | DB로부터 학생목록을 전달받아 저장한다.  | 데이터 전달        |
| View <-> 학생목록  | 학생목록을 View에 전달한다.  | 데이터 전달        |
| View <-> 학생 CRUD  | 학생 CRUD에 해당하는 GUI를 View에 전달한다. | 데이터 전달      |
| View <-> Pagemaker  | View를 화면에 출력한다. | 출력      |
| Controller <-> 학생 선택  | 학생을 선택하면 해당 학생정보조회 페이지로 이동한다. | 요청 전달     |

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 현재 인증된 로그인 정보 |
| Controller | 수업 정보 | 현재 선택된 수업 정보 |
| 학생 목록  | 학생 사진, 이름, 학번, 출석상태 등  | 학생 정보와 관련된 세부사항           |

![UC-5](https://user-images.githubusercontent.com/76427521/115992125-00015000-a607-11eb-9c8f-c0f87ccd9a61.PNG)


## UC-6(CheckAttendance)

### Extracting the Responsibilities

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :---: | ------------- |
| UC-6과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|
|각 학생들의 출결 상태가 바뀔 때마다 실시간으로 자동으로 저장한다.|D|자동 저장|
|DB로부터 받아온 수강학생 명단|K|수강학생 명단|
|출결 체크를 하는 toggle 버튼(출석/결석/지각/기타)|K|Toggle|
|서버와 여러 데이터들을 DB에 전송하고 record값을 받아온다.|D|DB Connection|
|불러온 정보를 화면에 출력|K|View|
|DB에 저장되어 있는 각 학생별 출결 정보|K|출결 데이터|

### Extracting the Associations

| Concept pair | Association Description  | Association Name |
| - | - | - |
|Controller <-> DB Connection|Controller는 DB Connection으로 request를 넘긴다.|요청 전달|
|Toggle <-> Controller|Toggle상태의 변화 내용을 Controller에게 전달한다.|내용 전달|
|Toggle <-> 자동저장|Toggle상태에 변동이 있으면 자동저장에게 변동여부를 전달한다.|변화 전달|
|자동저장 <-> Controller |자동저장 요청을 Controller에게 전달한다.|요청 전달|
|수강학생 명단 <-> View|불러왔던 수강학생 명단을 출석체크 페이지에 보여준다.|게시|
|Toggle <-> View|출결체크를 할 수 있는 토글 버튼들도 페이지에 보여준다.|게시|
|DB Connection <-> 출결데이터|출결 데이터를 DB에 저장한다.|데이터 전달|

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
|Toggle|출석/결석/지각/기타|출결 여부에 따라 출석체크를 할 수 있는 토글 버튼|
|출결 데이터|각 학생들의 출결 정보|각 학생별로 현재까지의 출결 내용|

![teacher uc-6](https://user-images.githubusercontent.com/79308015/115994116-a1d96a80-a610-11eb-8a4c-03073d5fb0c5.jpg)



## UC-7(SearchStudents)

### Extracting the Responsibilities

| Responsibility Description | Type | Concept Name  |
| -- | - | -|
| UC-7와 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 사용자로부터 입력받은 학생이름을 바탕으로 DB 학생정보를 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다. | D    | Page maker |
| 사용자로부터 검색된 학생의 정보목록  | K   | 학생정보  |
| 입력받은 Input에 해당하는 학생의 정보를 DB에 요청한다.   | D   | 학생검색  |
| 사용자로부터 문자열을 입력받는다.   | D   | UserInput  |
| 불러온 정보를 보여주는 페이지    | K    | View          |

### Extracting the Associations

| Concept pair  | Association Description   | Association Name |
| -| - | - |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| View <-> Pagemaker  | View를 화면에 출력한다. | 출력      |
| Controller <-> UserInput   | 사용자로부터 검색 할 학생이름을 입력받는다. | 문자열 입력      |
| UserInput <-> 학생 검색   | 입력받은 UserInput 데이터를 전달한다. | 데이터 전달      |
| Contorller <-> 학생 검색    | UserInput을 Controller에 전달하여 학생정보를 전달받는다. | 검색      |
| View <-> 학생정보   | 학생정보를 View에 전달한다. | 데이터 전달      |

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 현재 인증된 로그인 정보 |
| Controller | 수업 정보 | 현재 선택된 수업 정보 |
| 학생정보 | 검색과 일치하는 학생정보 목록 | 검색된 학생의 정보 |
| UserInput  | 검색 폼  | 사용자로부터 입력을 받을 수 있는 검색 폼           |

![UC-7](https://user-images.githubusercontent.com/76427521/115992126-01327d00-a607-11eb-95e7-e83b00f8b602.PNG)


## UC-8(StudentInfo)

### Extracting the Responsibilities

| Responsibility Description  | Type | Concept Name  |
| - | - | - |
| UC-8와 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 사용자로부터 입력받은 학생이름을 바탕으로 DB 학생정보를 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다.                                 | D    | Page maker |
| 사용자로부터 검색된 학생의 정보                    | K   | 학생정보  |
| 입력받은 Input에 해당하는 학생의 정보를 DB에 요청한다.                    | D   | 학생검색  |
| 사용자로부터 문자열을 입력받는다.                    | D   | UserInput  |
| 로그인 정보를 다시 입력받아 사용자 인증과정을 거친다.                   | D   | 사용자인증  |
| 학생의 정보를 수정한다.                 | D   | 학생정보수정  |
| 불러온 정보를 보여주는 페이지                                 | K    | View          |

### Extracting the Associations

| Concept pair | Association Description | Association Name |
| - | - | - |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| View <-> Pagemaker  | View를 화면에 출력한다. | 출력      |
| Controller <-> UserInput   | 사용자로부터 검색 할 학생이름을 입력받는다. | 문자열 입력      |
| Controller <-> UserInput   | 사용자로부터 로그인 정보를 입력받는다. | 문자열 입력      |
| Controller <-> UserInput   | 사용자로부터 수정할 학생 정보를 입력받는다. | 문자열 입력      |
| UserInput <-> 학생 검색   | 입력받은 UserInput 데이터를 전달한다. | 데이터 전달      |
| Contorller <-> 학생 검색    | UserInput을 Controller에 전달하여 학생정보를 전달받는다. | 검색      |
| View <-> 학생정보   | 학생정보를 View에 전달한다. | 데이터 전달      |
| Controller <-> 학생정보 수정   | 학생정보 수정 데이터를 전달받고, 데이터베이스에 저장한다.     |
| Controller <-> 사용자 인증   | 입력받은 로그인정보를 통해 사용자 인증과정을 거친다. | 데이터 전달      |

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 현재 인증된 로그인 정보 |
| Controller | 수업 정보 | 현재 선택된 수업 정보 |
| 학생정보 | 학생 이름,사진,학번,Email,메모 등 | 검색된 학생의 정보 |
| UserInput  | 검색 폼  | 사용자로부터 입력을 받을 수 있는 검색 폼           |

![teacher uc-8](https://user-images.githubusercontent.com/79308015/115994124-a6058800-a610-11eb-8a33-7b4d3b6f2900.jpg)

## UC-9 (StudentPoint)

### Extracting the Responsibilities

Responsibility Description | Type | Concept Name
-|-|-
UC-9와 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D | Controller
로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업의 학생목록을 요청한다. | D | DB Connection(DAO+DB)
GUI를 통해 현재의 상태를 화면에 표현한다. | D | View Library(Page Maker)
개별 학생에게 별점을 부과하는 요청 | K | 별점 부과 요청
사용자에게 화면을 보여주는 역할을 한다. | K | User interface
교수자가 담당하는 수업의 학생 목록 | K | 학생 목록

### Extracting the Associations

Concept pair | Association Description | Association Name
:-:|-|-
Controller <-> View Library | Controller는 View Library에 요청을 보내고, 게시할 내용을 전달한다. | 응답
View Library <-> User interface | 게시할 내용을 전달받고 뷰를 그린다. | 뷰를 그림
DB Connection <-> Controller | Controller는 DAO로 request를 넘기고, DAO는 그에 따른 응답을 전달한다. | 요청/응답
Controller <-> 별점 부과 요청 | 학생 목록에서 선택한 학생에 대해 별점을 부과할지 물어보고 요청을 받는다. | 요청 전달
학생 목록 <-> DB Connection | 학생 목록을 DAO에 요청하고 제공받는다. | 제공

### Extracting Attributes

Concept | Attributes | Attributes Description
-|-|-
Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 교수자로 로그인이 되어있는지 확인한다.
별점 부과 요청 | 요청 폼 | 수업의 id, 학생의 id, 부과할 별점을 포함하는 폼 데이터

![uc-9](https://user-images.githubusercontent.com/11364584/115988256-b5c2a380-a5f3-11eb-9f7f-4d5675ede59e.jpeg)

## UC-10 (ClassNotice)

### Extracting the Responsibilities

Responsibility Description | Type | Concept Name
-|-|-
UC-10과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D | Controller
로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업의 학생목록을 요청한다. | D | DB Connection(DAO+DB)
GUI를 통해 현재의 상태를 화면에 표현한다. | D | View Library(Page Maker)
공지를 학생들에게 전달하는 요청 | K | 공지 전달 요청
사용자에게 화면을 보여주는 역할을 한다. | K | User interface
교수자가 담당하는 수업 목록 | K | 담당 수업 목록

### Extracting the Associations

Concept pair | Association Description | Association Name
-|-|-
Controller <-> View Library | Controller는 View Library에 요청을 보내고, 게시할 내용을 전달한다. | 응답
View Library <-> User interface | 게시할 내용을 전달받고 뷰를 그린다. | 뷰를 그림
DB Connection <-> Controller | Controller는 DAO로 request를 넘기고, DAO는 그에 따른 응답을 전달한다. | 요청/응답
Controller <-> 공지 전달 요청 | 학생들에게 전달할 공지의 제목과 내용을 물어보고 요청을 받는다. | 요청 전달
담당 수업 목록 <-> DAO | 교수자의 담당 수업 목록을 DAO에 요청하고 제공받는다. | 제공

### Extracting Attributes

Concept | Attributes | Attributes Description
-|-|-
Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 교수자로 로그인이 되어있는지 확인한다.
공지 전달 요청 | 요청 폼 | 수업의 id, 공지 제목, 공지 내용을 포함하는 폼 데이터

![uc-10](https://user-images.githubusercontent.com/11364584/115988263-bce9b180-a5f3-11eb-80c6-52a331f0acc3.jpeg)

## UC-11 (RejectStudent)

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-11과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 거절 버튼을 클릭한다. | D | 수강신청 거절 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
현재 상태를 보여주는 UI|	K	|View
UI를 통해 현재 상태를 화면에 표현한다.|	D|	Page Marer
수강신청 거절 성공 여부를 확인한다.|	D|	Valid Checker
수강신청 거절 성공여부를 알리는 팝업창을 보인다.	|D|	Pop-up Maker

### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> Page Maker|	Controller는 Page Maker에게 요청을 보내고 UI를 받는다.|	요청 전달
Page Maker <-> View| View를 화면에 출력한다.	|출력
Controller<->DB Connection|	Controller는 DB Connection으로 request를 넘긴다.|요청전달
수강신청 거절 요청 <-> Controller| 수강신청  요청을 Controller에게 전달한다.|	요청 전달
Valid Checker<-> DB connection|	DB connection에서 탈퇴 요청된 데이터가 잘 제거되어있는지의 여부를 Valid Checker애 넘겨준다.|	유효 여부 전달
Valid Checker<-> Pop-up Maker|	Pop-up Maker는 Valid Checker에게 정보를 받아 성공/실패에 관한 팝업창을 만든다.|생성

### Extracting Attributes
Concept | Attributes | Attributes Description
-|-|-
Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 교수자로 로그인이 되어있는지 확인한다.
수강신청 거절 요청 | 학생 정보 | 수업의 학년, 반 정보와 학생의 학년 반 정보가 일치하는지 확인한다.

![1908_4](https://user-images.githubusercontent.com/64057843/115989515-b52d0b80-a5f9-11eb-826a-1a7ac145d77e.png)
