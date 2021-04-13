# 2021-SE: Attendance Management System(출결관리 시스템)
___
## Contributors  
|이름|학번|Github ID|비고|  
|:--:|:--:|:--:|:--:|  
|김지혜|20161863|jihye-kim11|
|박종혁|20185536|jjonyo|PM
|윤진호|20161676|jhyoon9705|
|이한용|20151322|lhy0718|
|정나린|20180396|jnl1128|
|진겸|20153031|kevinoriginal|
___
## Problem Statement

### Problem and Purpose

중등 및 고등교육기관에서 학생의 참석 여부를 확인하기 위해 출석을 부르면서 수기로 작성하는데 되는데 이는 매우 불편할 뿐만 아니라 시간 소모적이다. 따라서 이를 단축할 방법의 필요성이 대두 된다. 특히 종이를 통한 수기 기록 방법은 데이터의 유실성이 높으며, 정확도는 낮고, 보관하기에도 큰 비용이 들어간다. 이러한 문제를 해결하기 위해 출결 관리를 전자화 시켜서 시간과 비용을 동시에 단축 할 수 있도록 한다. 비슷한 예시로 배달 주문 모바일 솔루션(배달의 민족, 쿠팡이츠 등)의 경우도 많은 시간 단축과 더불어 human transaction cost를 줄였다.   

즉, 학생의 출결 상황을 학부모에게 자동 전송하여 학부모가 자녀의 출결 상황을 쉽게 알 수 있도록 하며, 교수자에게는 기존의 출석부를 전자화하여 출결 관리에 편의를 제공하는 것에 목적을 둔다. 

### Scenarios

#### 출결관리 웹

1. 출결관리 웹(사이트)에 입장함과 동시에 교수자(교사)의 로그인 화면이 뜬다. 로그인을 한 번 한 경우 토근을 쿠키에 저장하여 다시 로그인을 하지 않아도 된다.  
2. 로그인을 한 뒤에는 미리 등록된 정보에 따라 현재 맡고  있는 수업의 목록이 뜨게 된다.  
3. 오늘 날짜와 가까운 순서대로 정렬하여 다가온 수업시간에 대해서 누르면 바로 입장을 할 수 있다. 
4. 위의 상태바(Top Header)에는 `수업 생성`, `수업 목록`,  `로그아웃`  3게의 버튼이 있다.  
   a. `수업 생성`에서는 교사가 맡은 수업을 CRUD할 수 있다.  
   b. `수업 목록`에서는 본인의 수업을 선택할 수 있으며, 각 수업 안에서는 학생들의 정보를 CRUD 할 수 있다. 수업을 선택하면 수강 학생 목록이 나오고 각 행에는 학생이름과 학적정보를 누를 수 있는 버튼 4개(`출결`,  `결석`,  `지각`,  `공결` )가 있다.  
   c. 각 수업으로 들어가면 `출결정보 전송`이 있고 교사가 누르면 즉시 출결 정보가 학부모에게 전송된다.  
       예시) *홍길동 학생은 오늘 참석을 해 `출결` 버튼을 누른다. 김예지 학생은 지각을 해 `지각` 버튼을 누르고, 그렇게 총 오늘 수업에 참석한 50명의 학생을 모두 출결관리를 한다. 화면의 맨 위에 학생의 정원수와 출결 인원수, 지각인원수, 공결 인원수를 체크를 한다. 수업 종료 후 교사가 `출결정보 전송`을 누르면 학부모에게 이메일 또는 문자메세지를 통해 자녀의 출결 정보가 전송된다.*  

## Sub-Group
   |Group|Desecription|Contributor|
   |--|--|--|
   |Auth+기타| 사용자가 앱에서 로그인 및 회원가입, 부모에게 자녀의 출결 결과 발송|김지혜, 진겸|
   |Form Create/Update|사용자가 수업 및 학생을 CRUD|이한용, 정나린|
   |출석 체크|학생에 대한 출석 체크, 수업 및 학생 목록, 기본적인 정보 조회|박종혁, 윤진호|  

## [WIP] Requirments (Stories)

* [Attendance Check](/AttendanceCheck/Requirements.md)
* [Form Create / Update](/FormCreateUpdate/Requirements.md)
