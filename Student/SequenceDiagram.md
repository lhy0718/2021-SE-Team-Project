# Sequence diagram

### UC-1 AvailableClassList
<details><summary>UC-1 Sequence Diagram_v1</summary>
  
![Student_UC-1_v1](https://user-images.githubusercontent.com/79308015/117747494-4088dc80-b249-11eb-9bd1-34d884c54a1c.JPG)

</details>

<details><summary>UC-1 Sequence Diagram_v2</summary>
  
![Student_UC-1_v2](https://user-images.githubusercontent.com/79308015/117747920-03711a00-b24a-11eb-9ce3-7f8447c69784.JPG)
: DB에 접속할 때는 SQL을 사용하므로 loop 블록 삭제</br>
: UI-Controller-Service-Repository-DB 형식을 사용하여 구체화</br>
: 수업 검색 시에 수업 존재여부를 isExist로 구성하여 true일 경우 status code:200을 , false일 경우 status code: 404를 반환하도록 함

</details>

<details><summary>UC-1 Sequence Diagram_v2 feedback</summary>
  
- [이한용] **click 개설 수업 조회** 부터 Database까지 가는 모든 함수에 *userID*가 parameter로 들어가야 할 것 같습니다.
**controller** 에서 **n:className** 을 destroy하는 작업을 맨 하단에 넣으면 좋을거 같아요.
**user interface**에서 result를 받고 page가 갱신되는 다이어그램을 넣어야 할 것 같습니다.
- [정나린] UI에서 user에게 보여지는 화면을 표시해야할 것 같습니다.
     - enter className 전, alt block 안
     
    click 개설 수업 조회 부분이 본인 학교의 모든 수업을 조회하려는 목적이라면 특정 수업을 의미하는 parameter가 필요하지 않을 것 같습니다.(한용님 feedback에 대한 의견)

</details>

<details><summary>UC-1 Sequence Diagram_v3</summary>
  
![Student_UC-1_v3-2](https://user-images.githubusercontent.com/79308015/118349524-270acc00-b58c-11eb-944f-f18132a7e0f9.JPG)
: 수업 검색 시에 수업명 validation 과정을 추가하여 val에 true/false를 반환받음. true일 떄는 검색, false일 때는 error alert</br>
: status code를 상황에 따라 받지 않고 하나의 변수로 받도록 함</br>
: className 객체 destrpy 과정, display 되는 과정 추가</br>
: Repository가 DB에 접속할 때, SQL을 사용하므로 함수 형식 대신에 request 사용

</details>

---
### UC-2 RegisterClass
<details>
<summary>UC-2 Sequence Diagram_v1</summary>

![Student_UC2_draft](https://user-images.githubusercontent.com/76427521/117476952-60de4000-af98-11eb-9006-c3b9e2b5d487.jpg)

</details>

<details>
<summary>UC-2 Sequence Diagram_v2</summary>  

![Student-SD-UC2](https://user-images.githubusercontent.com/76427521/117756022-581b9180-b258-11eb-8527-969a6961ba20.PNG)


</details>


