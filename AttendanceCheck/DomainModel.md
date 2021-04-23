## **UC-1(InquireClassList)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| -------------------------- | ------------------------------------------------------------ | ------------ |
| UC-1과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업목록을 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다.                                 | D    | Page Maker |
| DB로부터 받아온 수업목록 | K    | 수업목록 |
| 수업명을 클릭하면 해당 페이지로 넘어간다. | D    | 수업선택 |
| 수업CRUD 버튼                    | K   | 수업_CRUD_Button  |
| 불러온 정보를 보여주는 페이지                                 | K    | View          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| View <-> DB Connection  | 수업목록을 View에 전달한다.  | 데이터 전달        |
| View <-> Page Maker  | View를 화면에 출력한다. | 출력      |
| Controller <-> 수업_CRUD_Button  |수업 CRUD에 해당하는 요청을 전달한다. | 요청 전달     |
| DB Connection <-> 수업 목록  |DB에 저장된 수업 목록을 주고받는다. | 요청 전달     |
|수업선택 <-> Controller|사용자가 선택한 수업에 대한 정보 요청을 전달한다. |요청전달|


**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 어떤 요청이 들어왔을 때 로그인이 되어있는지 확인한다. |
| 수업 목록  | 수업 이름, 수업 요일, 수업 시간 , 수강 인원 등  | 각 수업과 관련된 세부적인 정보           |

![UC-1](https://user-images.githubusercontent.com/79308015/115801172-13e65f80-a417-11eb-8230-d01e7a6b2f46.jpg)

---

## **UC-2(InquireEnrolledStudent)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :---: | ------------- |
| UC-2와 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 로그인 상태를 확인하여, 현재 수업 정보를 바탕으로 DB 학생목록을 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다.                                 | D    | Page maker |
| DB로부터 받아온 학생목록 | K    | 학생목록 |
| 학생을 선택하여 ``학생정보조회(UC-5)``로 이동한다. | D    | 학생선택 |
| 학생 CRUD 버튼                               | K    | 학생_CRUD_Button          |
| 불러온 정보를 보여주는 페이지                                 | K    | View          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| Controller <-> 학생목록  | DB로부터 학생목록을 전달받아 저장한다.  | 데이터 전달        |
| View <-> 학생목록  | 학생목록을 View에 전달한다.  | 데이터 전달        |
| View <-> 학생 CRUD  | 학생 CRUD에 해당하는 GUI를 View에 전달한다. | 데이터 전달      |
| View <-> Pagemaker  | View를 화면에 출력한다. | 출력      |
| Controller <-> 학생 선택  | 학생을 선택하면 해당 학생정보조회 페이지로 이동한다. | 요청 전달     |



**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 현재 인증된 로그인 정보 |
| Controller | 수업 정보 | 현재 선택된 수업 정보 |
| 학생 목록  | 학생 사진, 이름, 학번, 출석상태 등  | 학생 정보와 관련된 세부사항           |

![DomainModel_UC2](https://user-images.githubusercontent.com/76427521/115754868-9fd89700-a3d7-11eb-9ae2-05ffd810f604.JPG)

---
## **UC-3(CheckAttendance)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :---: | ------------- |
| UC-3과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|
|각 학생들의 출결 상태가 바뀔 때마다 실시간으로 자동으로 저장한다.|D|자동 저장|
|DB로부터 받아온 수강학생 명단|K|수강학생 명단|
|출결 체크를 하는 toggle 버튼(출석/결석/지각/기타)|K|Toggle|
|서버와 여러 데이터들을 DB에 전송하고 record값을 받아온다.|D|DB Connection|
|불러온 정보를 화면에 출력|K|View|
|DB에 저장되어 있는 각 학생별 출결 정보|K|출결 데이터|

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
|Controller <-> DB Connection|Controller는 DB Connection으로 request를 넘긴다.|요청 전달|
|Toggle <-> Controller|Toggle상태의 변화 내용을 Controller에게 전달한다.|내용 전달|
|Toggle <-> 자동저장|Toggle상태에 변동이 있으면 자동저장에게 변동여부를 전달한다.|변화 전달|
|자동저장 <-> Controller |자동저장 요청을 Controller에게 전달한다.|요청 전달|
|수강학생 명단 <-> View|불러왔던 수강학생 명단을 출석체크 페이지에 보여준다.|게시|
|Toggle <-> View|출결체크를 할 수 있는 토글 버튼들도 페이지에 보여준다.|게시|
|DB Connection <-> 출결데이터|출결 데이터를 DB에 저장한다.|데이터 전달|

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
|Toggle|출석/결석/지각/기타|출결 여부에 따라 출석체크를 할 수 있는 토글 버튼|
|출결 데이터|각 학생들의 출결 정보|각 학생별로 현재까지의 출결 내용|

![UC-3](https://user-images.githubusercontent.com/79308015/115747954-b0d1da00-a3d0-11eb-8d37-731584321ba1.jpg)

---
## **UC-4(SearchStudent)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :---: | ------------- |
| UC-4와 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 사용자로부터 입력받은 학생이름을 바탕으로 DB 학생정보를 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다.                                 | D    | Page maker |
| 사용자로부터 검색된 학생의 정보목록                   | K   | 학생정보  |
| 입력받은 Input에 해당하는 학생의 정보를 DB에 요청한다.                    | D   | 학생검색  |
| 사용자로부터 문자열을 입력받는다.                    | D   | UserInput  |
| 불러온 정보를 보여주는 페이지                                 | K    | View          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| View <-> Pagemaker  | View를 화면에 출력한다. | 출력      |
| Controller <-> UserInput   | 사용자로부터 검색 할 학생이름을 입력받는다. | 문자열 입력      |
| UserInput <-> 학생 검색   | 입력받은 UserInput 데이터를 전달한다. | 데이터 전달      |
| Contorller <-> 학생 검색    | UserInput을 Controller에 전달하여 학생정보를 전달받는다. | 검색      |
| View <-> 학생정보   | 학생정보를 View에 전달한다. | 데이터 전달      |



**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 현재 인증된 로그인 정보 |
| Controller | 수업 정보 | 현재 선택된 수업 정보 |
| 학생정보 | 검색과 일치하는 학생정보 목록 | 검색된 학생의 정보 |
| UserInput  | 검색 폼  | 사용자로부터 입력을 받을 수 있는 검색 폼           |

![DomainModel_UC4](https://user-images.githubusercontent.com/76427521/115754875-a23af100-a3d7-11eb-84b6-4c3d852b2d3a.JPG)


---
## **UC-5(InquireStudentInfo)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :---: | ------------- |
| UC-5와 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 사용자로부터 입력받은 학생이름을 바탕으로 DB 학생정보를 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다.                                 | D    | Page maker |
| 사용자로부터 검색된 학생의 정보                    | K   | 학생정보  |
| 입력받은 Input에 해당하는 학생의 정보를 DB에 요청한다.                    | D   | 학생검색  |
| 사용자로부터 문자열을 입력받는다.                    | D   | UserInput  |
| 로그인 정보를 다시 입력받아 사용자 인증과정을 거친다.                   | D   | 사용자인증  |
| 학생의 정보를 수정한다.                 | D   | 학생정보수정  |
| 불러온 정보를 보여주는 페이지                                 | K    | View          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
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



**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 현재 인증된 로그인 정보 |
| Controller | 수업 정보 | 현재 선택된 수업 정보 |
| 학생정보 | 학생 이름,사진,학번,Email,메모 등 | 검색된 학생의 정보 |
| UserInput  | 검색 폼  | 사용자로부터 입력을 받을 수 있는 검색 폼           |

![DomainModel_UC5](https://user-images.githubusercontent.com/76427521/115754882-a404b480-a3d7-11eb-984d-617f7c9d0aef.JPG)


---
## **UC-6(StudentMemo)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :---: | ------------- |
|UC-6과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|Controller|
|학생에 대한 메모를 CRUD하는데 사용되는 버튼|K|Memo Button|
|서버와 여러 데이터들을 DB에 전송하고 record값을 받아온다.|D|DB Connection|
|메모를 작성하고 수정할 수 있는 텍스트 에디터|K|Memo Editor|
|DB에서 받아온 메모 정보|K|메모 정보|

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
|MemoButton <-> Controller|Memo버튼을 클릭함으로써 메모를 작성, 수정하기 위한 요청 전달|요청 전달|
|Controller <-> Memo Editor|Controller는 Memo Editor를 호출|준비|
|Memo Editor <-> Controller|수정한 내용을 전달|데이터 전달|
|Controller <-> DB Connection|메모 수정을 수정한 데이터와 함께 요청, 과거 메모 데이터 호출 요청|요청 전달|
|DB Connection <-> Memo Editor|이전에 작성했던 메모를 Memo Editor에 전달|데이터 전달|
|메모 정보 <-> DB Connection|메모 정보를 불러오거나 저장|데이터 전달|

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
|메모 정보|메모 정보 record|이전에 작성되어 DB에 저장되어있는 학생별 메모 내용|

![UC-6](https://user-images.githubusercontent.com/79308015/115748113-d52db680-a3d0-11eb-963a-06fbab9a320c.jpg)

---
## **UC-7(SendEmail)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :---: | ------------- |
| 수업 종료를 클릭되면 수업이 종료처리를 요청한다.|D|수업종료 요청|
|UC-7과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|
|출결정보를 학부모에게 이메일로 전송한다.|D|Email Sender|
|서버와 여러 데이터들을 DB에 전송하고 record값을 받아온다.|D|DB Connection|
|불러온 정보를 보여준다.|K|View|
|출결 처리 내용|K|Checked Result|
|가져온 데이터를 페이지(화면)에 출력한다.|D|Page Maker|


**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
|수업종료 요청 <-> Controller|수업종료 처리를 Contoller에게 요청한다.|요청 전달|
|Controller <-> DB Connection|Controller는 DB Connection으로 request를 넘긴다.|요청 전달|
|DB Connection <-> Email Sender|이메일 발송에 필요한 정보를 전달한다.|데이터 전달|
|Controller <-> Email Sender|이메일 발송을 요청한다.|요청 전달|
|Email Sender <-> Checked Result|이메일 전송이 완료됨을 전달한다.|전송완료 전달|
|Checked Result <-> Controller|출결결과에 대한 정보를 요청한다. |요청전달|
|DB Connection <-> Checked Result|출결결과에 대한 정보를 전달한다.|데이터 전달|
|Check Result <-> View|해당 내용을 View에 전달|데이터 전달|
|View <-> Page Maker|View를 화면에 출력한다.|출력|

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
|수업종료 요청|수업종료 버튼|수업이 종료됨을 입력받을 수 있는 버튼|
|Checked Result|출결 처리 정보|해당 수업에서 출석/결석/지각/기타에 각각 해당하는 학생 인원|
|Email Sender|학부모 이메일 주소, 출결 결과|학부모에게 전송할 출결 결과와 학생에 해당하는 학부모 이메일 주소|

![UC-7](https://user-images.githubusercontent.com/79308015/115797745-a2ef7980-a40f-11eb-9bf6-b05f4cf600e9.jpg)




