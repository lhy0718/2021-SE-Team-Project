# Domain Model

## UC-1 : AddClass

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-1과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 수업 추가버튼을 클릭한다. | D | 수업추가폼 요청
수업 정보|	K	|수업 정보 
User가 수업 추가 완료 버튼을 클릭한다.|	D|	수업추가 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
GUI를 통해 현재 상태를 화면에 표현한다.|	D|	Page Marker
현재 상태를 보여주는 GUI|	K	|View


### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> Page Marker|	Controller는 Page Marker에게 요청을 보내고 GUI를 받는다.|	요청 전달
Controller <-> View|	Controller는 View에게 게시할 내용을 전달한다.|	게시
수업 정보 <-> Controller|	수업 정보를 Controller에게 제공한다.|	데이터 전달
Page Marker <-> View|	Page Marker가 View를 준비한다.	|준비
Controller <-> DB Connection|	Controller는 DB Connection으로 request를 넘긴다.|	요청 전달
수업추가 요청 <-> Controller|	수업 추가 요청을 Controller에게 전달한다.|	요청 전달
Page Marker <-> DB Connection|	DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다.	|데이터 전달

### Extracting Attributes
Concept|Attributes|Attributes Description
-|-|-
수업정보|	수업 정보 record|	사용자가 입력한 수업 정보(수업명, 학년도, 학기)

![diagram (1)_2](https://user-images.githubusercontent.com/64057843/115800880-683d0f80-a416-11eb-8e88-0a4ccca4e0c1.png))

## UC-2 : UpdateClass

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-2과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 수업 수정버튼을 클릭한다. | D | 수업수정폼 요청
수업 정보|	K	|수업 정보 
User가 수업 수정 완료 버튼을 클릭한다.|	D|	수업수정 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
GUI를 통해 현재 상태를 화면에 표현한다.|	D|	Page Marker
현재 상태를 보여주는 GUI|	K	|View


### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> Page Marker|	Controller는 Page Marker에게 요청을 보내고 GUI를 받는다.|	요청 전달
Controller <-> View|	Controller는 View에게 게시할 내용을 전달한다.|	게시
수업 정보 <-> Controller|	수업 정보를 Controller에게 제공한다.|	데이터 전달
Page Marker <-> View|	Page Marker가 View를 준비한다.	|준비
Controller <-> DB Connection|	Controller는 DB Connection으로 request를 넘긴다.|	요청 전달
수업추가 요청 <-> Controller|	수업 수정 요청을 Controller에게 전달한다.|	요청 전달
Page Marker <-> DB Connection|	DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다.	|데이터 전달

### Extracting Attributes
Concept|Attributes|Attributes Description
-|-|-
수업정보|	수업 정보 record|	사용자가 입력한 수업 정보(수업명, 학년도, 학기)

![diagram (1)_3](https://user-images.githubusercontent.com/64057843/115800916-77bc5880-a416-11eb-8b54-5add0dfe5dc8.png)

## UC-3 : RemoveClass

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-3과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 수업 삭제버튼을 클릭한다. | D | 수업삭제 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
현재 상태를 보여주는 GUI|	K	|View
GUI를 통해 현재 상태를 화면에 표현한다.|	D|	Page Marker
삭제 성공 여부를 확인한다.|	D|	Valid Checker
삭제 성공여부를 알리는 팝업창을 보인다.	|D|	Pop-up Maker

### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> Page Marker|	Controller는 Page Marker에게 요청을 보내고 GUI를 받는다.|	요청 전달
Controller <-> View|	Controller는 View에게 게시할 내용을 전달한다.|	게시
Page Marker <-> View|	Page Marker가 View를 준비한다.|	준비
Controller<->DB Connection|	Controller는 DB Connection으로 request를 넘긴다.|요청전달
수업삭제 요청 <-> Controller|	수업 삭제 요청을 Controller에게 전달한다.|	요청 전달
Page Marker <-> DB Connection|	DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다.|	데이터 전달
Valid Checker<-> DB connection|	DB connection에서 탈퇴 요청된 데이터가 잘 제거되어있는지의 여부를 Valid Checker애 넘겨준다.|	유효 여부 전달
Valid Checker<-> Pop-up Maker|	Pop-up Maker는 Valid Checker에게 정보를 받아 성공/실패에 관한 팝업창을 만든다.|생성

### Extracting Attributes

![diagram (1)_4](https://user-images.githubusercontent.com/64057843/115801077-dda8e000-a416-11eb-9de6-a4daf7e001fe.png)
