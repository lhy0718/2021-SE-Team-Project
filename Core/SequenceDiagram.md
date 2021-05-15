# Sequence diagram

기존의 traditional 한 diagram 에서는 client 의 page를 서버에서 그리거나 아니면 server client가 통합된 구조 이지만
우리 앱 같은 경우는, server, client가 나누어져있는 동시에 client에서 page를 그리는 현대적인 single page application 방식 +. RESTful API 통신을 서버와 클라이언트가 하게 됨으로 이에 맞게 Sequence digram을 변형함



## UC-1 AddUser

### UC-1 Sequence diagram - Simple Version

유저 인터랙션을 중점으로 Sequence digram을 완성을 함으로써 UC-1에서 정의 내렸던 User-Flow(시나리오)를 바탕으로, 완성도를 높이고, Sequence Diagram과 연관시킬 수 있도록 함.

1. 유저는 회원가입 버튼을 눌러서 화면에 접근
2. 회원가입을 하기 위한 이메일 입력 필드가 나옴
3. 이메일을 입력해 보내면 서버에서 중복여부를 체크하며, 가입할 수 있는 메일이면 유저에게 verfication code를 전송한다.
4. 유저가 해당 verification code를 입력하고 맞으면 나머지 signup에 필요한 정보를 입력할 수 있는 step으로 넘어간다.
5. 해당 정보를 서버로 보내서 가입을 완료한다. 

![KakaoTalk_20210508_200650213](https://user-images.githubusercontent.com/59490892/117540723-6d6fa080-b04b-11eb-9380-84c17eccf541.png)<br>

### UC-1 Sequence Diagram v1

SOLID Principle를 지키기 위해서 최대한 Controller, Service, Repository 등 기능들을 분리 시킴. Controller는 클라이언트와 소통하는 통로, route과 method 명을 받아서 해당 method를 service를 통해 부르는 역할. Service는 실제 비즈니스 로직이 있는곳. DTO는 Data Transfer Object로써, Data 가 이동하는 interface를 의미함. UC-1 의 경우 가입을 하는 가입 정보 form이 되겠음. 

- 해당 sequence diagram을 기조로 다른 subgroup도 통일 할 수 있도록 구조를 잡음
- 맨 처음 User, UI에 대한 부분을 생략해서 그리다가, Page2부터 이부분도 추가를 함
- 해당 diagram을 바탕으로 class diagram 초안을 완성 시킴

![KakaoTalk_20210508_200655523](https://user-images.githubusercontent.com/59490892/117540726-6fd1fa80-b04b-11eb-8f18-a7445611d3c5.jpg)![KakaoTalk_20210508_200658378](https://user-images.githubusercontent.com/59490892/117540728-706a9100-b04b-11eb-8c1d-5872c0eeb565.png)

### UC-1 Sequence Diagram v2 (Final version)

Class diagram의 초안을 완성 한 후 다시 보완을 마침. 다만 서버에서 이상이 있을시 뜰 수 있는 에러 (Status Code: 500)에 대해서는 별 다른 조치를 취하지 않음(너무 diagram이 복잡해질 것이기 때문)

- User 과 UI 부분에서 일어나는 Route 변경, Form validation 을 보완
- DTO를 Server 부분에서 UI부분으로 옮겨 Form과 통합 시킴 (실제로 정보를 클라이언트에도 들고 있음)
- Verification code 가 정상적으로 보내진 뒤에 이메일을 보내도록 로직의 정합성을 맞춤
- If문과 에러 핸들링을 더욱 정교하게 함
- 회의 결과 Node.js로 서버를 구성할 확률이 높아 Promise 개념을 도입해 비동기 처리가 필요한 부분에 대해 표시를 함

![User Diagrams (Kevin)-UC-2_v2](https://user-images.githubusercontent.com/18115360/118354886-2aac4c00-b5a8-11eb-8044-2c6210b9598c.png)







## UC-2 Login

### UC-2 Sequence Diagram v1

로그인 과정을 user-UI-Controller-Auth Service-DB에 맞춰 작성하였으며 전송된 정보의 유효여부에 따라 작성하였습니다.

1.   유저는 email/pw 입력 후 로그인 버튼 클릭
2.   로그인 버튼 클릭 시 서버에서 정보를 auth service로 전송하여 유효한 정보인지 확인
   2-1)   유효한 정보일 경우 해당 정보에 대한 결과값을 DB에 요청. 해당 정보 전달.
   2-2)유효하지 않을 경우 유효하지 않음을 전송.
3. 결과값에 따라 페이지 새로고침.

![uc2 login](https://user-images.githubusercontent.com/59490892/117151119-ba593a00-adf3-11eb-8168-b7a410407b71.JPG)

### UC-2 Sequence Diagram_v2

email/password 유효 여부 확인과,email/password에 따른 user info를 불러오는 과정이 2번으로 나눌 필요 없이 1번으로 변경 가능할듯하다는 피드백에 따라 1번으로 수정하였으며, Auth service와 Database 사이에 User Repository를 추가하였습니다.

![000](https://user-images.githubusercontent.com/59490892/117540895-482f6200-b04c-11eb-9d7c-d33ca258e923.JPG)



#### UC-2 Sequence Diagram_v2 feedback

- [이한용] alt block의 하단의 **send result, refresh page** 부분은 분기에 상관없이 중복 되므로 블록 바깥으로 빼도 되지 않을까 싶습니다. 
  database 까지 작업이 진행되지 않은 상태에서 **user email**과 **password**의 오류 여부가 결정될지 의문이 있습니다. 따라서 alt block으로 진입하는 시점이 **find user** 이후 이어야 할 것 같습니다.
  service에서 repository로 가는 작업을 **hasInfo := requestUserInfo()** 으로 설정하고, alt block의 분기문을 **hasInfo == true** 와 같은 조건문으로 변경하면 좋을 것 같습니다.
- [박종혁] 뭐가 정답일지는 모르겠지만, 교수님 pdf예시를 보면 함수형태로 flow가 진행되는것으로 보이는데 가능하다면 이 형식을 맞추는게 좋지않을까 생각됩니다.
  그리고 위에 한용님이 말씀하신 것 처럼 alt block이 잘못 설정된것 같습니다. Database로부터 유저정보를 받아온다음 Auth Service에서 verification을 한 후에 해당 결과를 Contoller로 넘겨 Controller에서 결과에 따른 분기를 표현하는 것이 더 좋을것 같습니다.



### UC-2 Sequence Diagram_v3

최종적으로 User - UI - Controller - Auth Service - User Repository - DB 구조로 sequence diagram을 작성하였습니다.  

피드백을 반영하여 수정하였으며 수정 사항은 다음과 같습니다.

- 블록 내부의 send result, refresh page 부분이 중복되므로 블록 바깥으로 옮겨 작성
- UI 로 return 하는 부분에 status code를 추가

![sequence-Page-2](https://user-images.githubusercontent.com/59490892/118277740-10b92d80-b504-11eb-9af4-8c70f6e1a6cd.png)


</details>


---

### UC-3 Logout

### UC-3 Sequence Diagram_v1 

로그아웃 과정을 user-UI-Controller-Auth Service-DB에 맞춰 작성하였습니다.

1. 유저는 logout 버튼을 클릭

2. 로그아웃 버튼 클릭 시 서버에서 로그아웃 정보를 전송하여 로그아웃 진행

3. 결과값에 따라 페이지 새로고침.

![001](https://user-images.githubusercontent.com/59490892/117540902-4c5b7f80-b04c-11eb-879a-be96eeac3172.JPG)



#### UC-3 Sequence Diagram_v1 feedback

- [이한용] **logout()**함수에 **email**이 parameter로 들어가야 할 것 같습니다. 
  controller에서 validation 과정도 있으면 좋을거 같아요.
- [정나린] 로그아웃 이후에 접근 권한이 없어지는 것을 표현하지 않아도 될는지 잘 모르겠습니다.



### UC-3 Sequence Diagram_v2 

최종적으로 User - UI - Controller - User Repository - DB 구조로 sequence diagram을 작성하였습니다.  

피드백을 반영하여 수정하였으며 수정 사항은 다음과 같습니다.

- logout()함수에 email을 parameter로 추가
- UI 로 return 하는 부분에 status code를 추가



![sequence-Page-3](https://user-images.githubusercontent.com/59490892/118277882-41996280-b504-11eb-94fb-73a124909073.png)


