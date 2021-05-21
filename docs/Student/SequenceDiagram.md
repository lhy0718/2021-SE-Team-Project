# Sequence diagram

## UC-1 AvailableClassList
### UC-1 Sequence Diagram_v1
  
![Student_UC-1_v1](https://user-images.githubusercontent.com/79308015/117747494-4088dc80-b249-11eb-9bd1-34d884c54a1c.JPG)

### UC-1 Sequence Diagram_v2
  
![Student_UC-1_v2](https://user-images.githubusercontent.com/79308015/117747920-03711a00-b24a-11eb-9ce3-7f8447c69784.JPG)
: DB에 접속할 때는 SQL을 사용하므로 loop 블록 삭제</br>
: UI-Controller-Service-Repository-DB 형식을 사용하여 구체화</br>
: 수업 검색 시에 수업 존재여부를 isExist로 구성하여 true일 경우 status code:200을 , false일 경우 status code: 404를 반환하도록 함


### UC-1 Sequence Diagram_v2 feedback
  
- [이한용] **click 개설 수업 조회** 부터 Database까지 가는 모든 함수에 *userID*가 parameter로 들어가야 할 것 같습니다.
**controller** 에서 **n:className** 을 destroy하는 작업을 맨 하단에 넣으면 좋을거 같아요.
**user interface**에서 result를 받고 page가 갱신되는 다이어그램을 넣어야 할 것 같습니다.
- [정나린] UI에서 user에게 보여지는 화면을 표시해야할 것 같습니다.
     - enter className 전, alt block 안
     
    click 개설 수업 조회 부분이 본인 학교의 모든 수업을 조회하려는 목적이라면 특정 수업을 의미하는 parameter가 필요하지 않을 것 같습니다.(한용님 feedback에 대한 의견)

### UC-1 Sequence Diagram_v3 (Final version)
  
![Student_UC-1_v3-2](https://user-images.githubusercontent.com/79308015/118356116-b1fcbe00-b5ae-11eb-9da6-1a8c51f65dc2.JPG)
: 수업 검색 시에 수업명 validation 과정을 추가하여 val에 true/false를 반환받음. true일 떄는 검색, false일 때는 error alert</br>
: status code를 상황에 따라 받지 않고 하나의 변수로 받도록 함</br>
: className 객체 destrpy 과정, display 되는 과정 추가</br>
: Repository가 DB에 접속할 때, SQL을 사용하므로 함수 형식 대신에 request 사용


---

## UC-2 RegisterClass
### UC-2 Sequence Diagram_v1

![Student_UC2_draft](https://user-images.githubusercontent.com/76427521/117476952-60de4000-af98-11eb-9006-c3b9e2b5d487.jpg)

UC2의 Sequence를 추상적으로 표현<br>
1. 컨트롤러는 유저로부터 등록요청을 받아 Checker에게 Request를 전달<br>
2. Checker는 DAO를 통해 수업관련 데이터를 받아와 Validation을 거쳐 컨트롤러에 전달 <br>
3. 등록이 가능하다면 (valid=true) DAO에 수업 데이터 write요청<br>
4. 등록 완료후 유저에게 결과 출력.

### UC-2 Sequence Diagram_v2

![Student-SD-UC2](https://user-images.githubusercontent.com/76427521/117756022-581b9180-b258-11eb-8527-969a6961ba20.PNG)

v1를 조금 더 구체적으로 표현<br>
1. Controller는 작업을 Service에 위임하고 Service는 Repository를 통하여 Database에서 데이터를 받아온다. <br>
2. Controller는 요청에 대한 결과를 status code를 통해 UI에 전달한다.

### UC-2 Sequence Diagram_v2 feedback

- [이한용] prompt가 yes/no를 물어보는 부분에서 user의 선택에 따른 분기를 alt block으로 표기하면 좋을것 같습니다.
alt block의 destroy 부분은 분기에 상관없이 중복 되므로 블록 바깥으로 빼도 될거 같아요. 
- [정나린] register된 다음에 '등록되었습니다' 혹은 수업목록으로 이동 같이 화면에 표시되는 점을 작성해주시면 좋을 것 같습니다.
- [김지혜]alt block 뒤의 부분에 User에게 UI가 보여지는 부분을 result displayed나 refresh page 등을 사용하여 추가해준다면 좋을 것 같습니다. 
- [진겸]  Class Repository 에서 DB에 접속 할때는 함수의 형태보단SQL 로 하게 되는데 해당 부분 어떻게 표현 할지 생각 해보면 좋을 듯 합니다. (혹은 ORM 사용)

### UC-2 Sequence Diagram_v3 (Final version)

![Student-SD-UC2(v3)](https://user-images.githubusercontent.com/76427521/118348250-e5762300-b583-11eb-8fc9-0c32c180c9ad.PNG)

1. 유저의 Click의 Yes일때만 요청을 전달하도록 수정
2. 공통되는 Destroy부분을 alt block 바깥으로 수정
3. UI -> User로 수업등록에 대한 요청 결과 Display 추가
