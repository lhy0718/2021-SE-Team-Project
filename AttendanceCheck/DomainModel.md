### **UC-1(InquireClassList)**

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
| View <-> 수업목록  | 수업목록을 View에 전달한다.  | 데이터 전달        |
| View <-> Page Maker  | View를 화면에 출력한다. | 출력      |
| View <-> 수업_CRUD_Button  |수업 CRUD에 해당하는 GUI를 View에 전달한다. | 데이터 전달      |
| Controller <-> 수업 선택  |수업을 선택하면 해당 페이지로 이동한다. | 요청 전달     |



**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 어떤 요청이 들어왔을 때 로그인이 되어있는지 확인한다. |
| 수업 목록  | 수업 이름, 수업 요일, 수업 시간 , 수강 인원 등  | 각 수업과 관련된 세부적인 정보           |
---
### **UC-2(InquireEnrolledStudent)**
---
### **UC-3(CheckAttendance)**

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
|||

![UC-3](https://user-images.githubusercontent.com/79308015/115747954-b0d1da00-a3d0-11eb-8d37-731584321ba1.jpg)

---
### **UC-4(SearchStudent)**
---
### **UC-5(InquireStudentInfo)**
---
### **UC-6(StudentMemo)**

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
|||

![UC-6](https://user-images.githubusercontent.com/79308015/115748113-d52db680-a3d0-11eb-963a-06fbab9a320c.jpg)

---
### **UC-7(SendEmail)**
