# Sequence diagram

## UC-1 InquireClassList

### UC-1 sequence diagram v1

![Teacher-SD-UC1](https://user-images.githubusercontent.com/76427521/117755815-e9d6cf00-b257-11eb-91d1-1197be7e54d2.PNG)

로그인에 성공하면 userID객체를 생성하여 해당 객체를 Service로 전달한다.<br>
Service는 Repository를 통해 DB로부터 Class의 List를 받아와 Validation을 걸쳐 Controller로 전달<br>
Controller는 ClassList를 UI에게 전달하여 User에게 Display한다.

### UC-1 sequence diagram v2 feedback

- [김지혜]로그인 한 페이지에서 진행되는 상황이므로 user->user Interface로 가는 경로에는 Login이 아닌 다른 button click 과 같은 내용이 들어가는 것이 좋을 것 같습니다. 로그인을 통해 user정보를 얻어오는것을 표현하려하신것이라면 후에 controller에 접근하여 현재 로그인한 user의 info를 check 하는 부분을 넣는다면 좋을 것 같습니다.

### UC-1 sequence diagram v2 (Final version)

![Teacher-SD-UC1(v2)](https://user-images.githubusercontent.com/76427521/118295824-3dc30b80-b517-11eb-9775-58734d1e0db1.PNG)

User -> User Interface를 click으로 수정 <br>
id객체의 destroy 추가.

---

## UC-2 AddClass

### UC-2 sequence diagram v2

![Teacher Sequence Diagram-UC-2](https://user-images.githubusercontent.com/11364584/117861416-61dedc80-b2cc-11eb-9165-8ac94ba57f10.jpg)

**val1**은 form의 input값의 type이나 range에 대한 유효성이고, **val2**는 서버에 도착한 request 구문이 유효한지 또는 form에 누락된 데이터는 없는지에 대한 유효성으로 구상함. 따라서 **val2**가 false이면 **400 Bad Request**으로 error code를 반환하도록 했음.

### UC-2 sequence diagram v2feedback

- [윤진호] -"val2:=addCalss(f)" 부분과 val2==true/fase 블록 없이 hasClass 검사만으로 true일 경우에 code:409 리턴하고, false일 경우 수업 생성을 한 후에 code:200 리턴해도 되지않을까 싶습니다. (제가 의도하신 val2의 역할을 제대로 이해하지 못한 것일수도...)
  - [답변: 이한용] **val1**은 form의 input값의 type이나 range에 대한 유효성이고, **val2**는 서버에 도착한 request 구문이 유효한지, form에 누락된 데이터는 없는지에 대한 유효성으로 구상했습니다. 따라서 **val2**가 false이면 **400 Bad Request**으로 error code를 반환하도록 한 것입니다. 너무 세부적인 내용이라고 생각되면 제거하겠습니다.

    -수업 등록이 정상적으로 완료되면 UI에 표시되는 내용(ex: "정상적으로 생성되었습니다.")을 표시해도 좋을 것 같습니다.

    (+ 깃헙에 마크다운 파일 제목 UC-2 InquireEnrolledStudent → AddClass 로 수정해주세요!)

- [박종혁] confirm == true 부분에서 opt로 되어있는게 맞는지 궁금합니다. confirm값에 따라 AddClass의 여부가 결정된다면 opt가 아닌 alt가 더 맞는 표현인것 같습니다.
그리고 위에 진호님 피드백처럼 **val2 := addClass(f)** 만으로 val2의 값이 결정되는 부분이 이해하기가 어렵네요.(아직 DB에 접근하기 전이라 클래스가 존재하는지 모르므로)
그러므로 hasClass결과를 통해 Service나 Controller에서 분기를 나누는 것이 좋을 것 같습니다.
    1. [답변: 이한용] confirm == false인 경우를 따로 두지 않은 이유는 사용자가 '네'를 클릭했을 때만 addClass가 진행이 되어 code 200을 받아 UC-1으로 빠져나가기 때문입니다. 제가 이해한 바로는 if else 인 경우에 alt를 사용하고 if만 있을때는 opt을 사용하기 때문에 이 상황에서는 opt가 적절한 표시라고 생각했습니다.
    2. 위의 답변과 같이 val2는 클래스의 존재여부가 아니라 요청 자체에 대한 유효성입니다. 따라서 db단 까지  가지 않더라도 유효성을 판단할 수 있습니다.

### UC-2 sequence diagram v3 (Final version)

![Teacher Diagrams-UC-2_v3](https://user-images.githubusercontent.com/11364584/118348312-5c132080-b584-11eb-9d09-a28580117e04.jpg)

상황에 따라 다르게 받던 Status Code를 하나의 변수를 리턴 받는 것으로 추상화 함. **addClassService**를 **classService**로 변경

---

## UC-5 InquireEnrolledStudent

### UC-5 sequence diagram

![슬라이드1](https://user-images.githubusercontent.com/64057843/117558537-59628800-b0b9-11eb-84ae-7630630aa4db.PNG)
![슬라이드2](https://user-images.githubusercontent.com/64057843/117558541-5bc4e200-b0b9-11eb-91c0-222efad55566.PNG)

### UC-5 sequence diagram v2

![uc5(ver2)](https://user-images.githubusercontent.com/64057843/117838311-30a6e200-b2b5-11eb-9cbb-3c2bbe17d05f.png)

### UC-5 sequence diagram v2 feedback

- [이한용] alt block의 조건문이 반대로 되었고, alt block의 구분선이 내려간거 같습니다.
**"수업 목록"으로 이동** 이 **"수업 수정" 클릭** 인데 잘못 표시된 것 같습니다.
- [윤진호] activation 블록(객체 세로 점선 위에 네모박스)의 시작지점, 끝지점이 조정되면 좋을 것 같습니다. (화살표가 처음 들어가는 부분에서 블록이 시작되도록 / 필요없어지는 부분에서 블록이 끝나도록)
- [박종혁] 수업을 수강하는 학생 명단을 조회하는것이 주요 Usecase이므로 수업을 수정할 수 있는 버튼이 존재하는 것에 대한 다이어그램은 굳이 필요 없다고 생각됩니다. (UI에서 이루어진다 가정) 그리고 Service에선 학생리스트를 받게되고, Controller는 그 결과를 받게되므로
Contorller 에서 val := getStdList(id)가 되고 Service에서 StdList=checkStdList(id)나 StdList=getStdList(id)가 되어 Controller에서 분기를 나누는게 더 좋을 것 같습니다. (성공 or 실패)

### UC-5 sequence diagram v3

![image](https://user-images.githubusercontent.com/64057843/118227744-06773f00-b4c4-11eb-86a8-20303b2a5cd8.png)

교수자가 수업 목록을 받아오는 과정을 포함함.

### UC-5 sequence diagram v4 (Final version)

![image](https://user-images.githubusercontent.com/64057843/118263023-af3b9380-b4f0-11eb-8d36-715e3ed2dc13.png)

User가 수업 목록을 받아오는 과정이 teacher UC-1과 중복되므로 삭제함.
User가 직접 수업 이름을 입력하는 것이 아니라, 있는 수업 중 고르는 것이므로 *val1, val2*을 통한 validation 절차를 삭제함.
(statusCode로 충분하다고 판단함.)

---

## UC-6 CheckAttendance

### UC-6 sequence diagram v1

![UC-6_1](https://user-images.githubusercontent.com/11364584/117560848-5b821200-b0cc-11eb-94e7-75db88c39043.jpeg)
![UC-6_2](https://user-images.githubusercontent.com/11364584/117560849-5de46c00-b0cc-11eb-8b14-29691dfa1a62.jpeg)
![UI_mockup](https://user-images.githubusercontent.com/11364584/117560871-a3089e00-b0cc-11eb-80c1-70b7be97ed55.jpeg)

### UC-6 sequence diagram v2

![Teacher Sequence Diagram-UC-6](https://user-images.githubusercontent.com/11364584/117664358-a7bc7780-b1dc-11eb-855e-3ab69d6d7594.jpg)

**val**은 request 구문이 유효한지 또는 누락된 데이터는 없는지에 대한 유효성으로 구상함. 따라서 val이 false이면 **400 Bad Request**으로 error code를 반환하도록 했음.

### UC-6 sequence diagram v2 feedback

- [윤진호] 출결 체크가 이미 해당 수업을 듣는 학생들을 조회한 후에 그 페이지(학생 목록 테이블)에서 체크가 진행되기 때문에 hasStudent는 빼도 될 듯합니다.
  - [답변: 이한용] 클라이언트에서 서버로 데이터를 전달할때 오염이 되는 경우나, 악의적인 사용자가 UI를 통하지 않고 데이터를 직접 생성하여 서버에 전달하는 경우 등등 UI에서 선택한 정보가 그대로 서버에 전달됨이 100% 보장되지 않는다고 생각했습니다.
- [박종혁] **val := updateAttendance(a)** 부분에서 해당 함수에 대한 결과를 return받지 않았는데 val값의 어떻게 결정된것인지 이해하기가 힘듭니다. (UC-2의 val2도 마찬가지)
val값을 정상적으로 사용한다면 updateAteendace(a) 함수에 대한 결과를 Service로부터 return받아서 그에 따른 분기를 나누는것이 더 좋을 것같습니다.(ex. val=true면 update가 제대로 이루어진것, false면 업데이트에 실패한것)

### UC-6 sequence diagram v3 (Final version)

![Teacher Diagrams-UC-6_v3](https://user-images.githubusercontent.com/11364584/118348328-6f25f080-b584-11eb-8164-9c0f253e9f0f.jpg)

상황에 따라 다르게 받던 Status Code를 하나의 변수를 리턴 받는 것으로 추상화 함.
