### **UC-1(InquireClassList)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :---: | ------------- |
| UC-1과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 로그인 상태를 확인하여, 유저 정보를 바탕으로 DB 수업목록을 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다.                                 | D    | Page marker |
| DB로부터 받아온 수업목록 | K    | 수업목록 |
| 수업명을 클릭하면 해당 페이지로 넘어간다. | D    | 수업선택 |
| 수업CRUD 버튼                    | K   | 수업_CRUD_Button  |
| 불러온 정보를 보여주는 페이지                                 | K    | View          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| View <-> 수업목록  | 수업목록을 View에 전달한다.  | 데이터 전달        |
| View <-> Pagemarker  | View를 화면에 출력한다. | 출력      |
| View <-> 수업 CRUD  |수업 CRUD에 해당하는 GUI를 View에 전달한다. | 데이터 전달      |
| Controller <-> 수업 선택  |수업을 선택하면 해당 페이지로 이동한다. | 요청 전달     |



**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 어떤 요청이 들어왔을 때 로그인이 되어있는지 확인한다. |
| 수업 목록  | 수업 이름, 수업 요일, 수업 시간 , 수강 인원 등  | 수업 정보와 관련된 세부사항           |
---
