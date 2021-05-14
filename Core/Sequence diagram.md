# Sequence diagram

### UC-1 AddUser
<details><summary>UC-1 Sequence Diagram_v1</summary>
  
![KakaoTalk_20210508_200650213](https://user-images.githubusercontent.com/59490892/117540723-6d6fa080-b04b-11eb-9380-84c17eccf541.png)<br>
![KakaoTalk_20210508_200655523](https://user-images.githubusercontent.com/59490892/117540726-6fd1fa80-b04b-11eb-8f18-a7445611d3c5.jpg)<br>
![KakaoTalk_20210508_200658378](https://user-images.githubusercontent.com/59490892/117540728-706a9100-b04b-11eb-8c1d-5872c0eeb565.png)<br>

</details>

<details><summary>UC-1 Sequence Diagram_v2</summary>
  


</details>


---
### UC-2 Login
<details>
<summary>UC-2 Sequence Diagram_v1</summary>

![uc2 login](https://user-images.githubusercontent.com/59490892/117151119-ba593a00-adf3-11eb-8168-b7a410407b71.JPG)<br>

</details>

<details>
<summary>UC-2 Sequence Diagram_v2</summary>  
  
![000](https://user-images.githubusercontent.com/59490892/117540895-482f6200-b04c-11eb-9d7c-d33ca258e923.JPG)

</details>

<details>
<summary>UC-2 Sequence Diagram_v2 feedback</summary>  
      
- [이한용] alt block의 하단의 **send result, refresh page** 부분은 분기에 상관없이 중복 되므로 블록 바깥으로 빼도 되지 않을까 싶습니다. 
database 까지 작업이 진행되지 않은 상태에서 **user email**과 **password**의 오류 여부가 결정될지 의문이 있습니다. 따라서 alt block으로 진입하는 시점이 **find user** 이후 이어야 할 것 같습니다.
service에서 repository로 가는 작업을 **hasInfo := requestUserInfo()** 으로 설정하고, alt block의 분기문을 **hasInfo == true** 와 같은 조건문으로 변경하면 좋을 것 같습니다.
- [박종혁] 뭐가 정답일지는 모르겠지만, 교수님 pdf예시를 보면 함수형태로 flow가 진행되는것으로 보이는데 가능하다면 이 형식을 맞추는게 좋지않을까 생각됩니다.
그리고 위에 한용님이 말씀하신 것 처럼 alt block이 잘못 설정된것 같습니다. Database로부터 유저정보를 받아온다음 Auth Service에서 verification을 한 후에 해당 결과를 Contoller로 넘겨 Controller에서 결과에 따른 분기를 표현하는 것이 더 좋을것 같습니다.
      
</details>

<details>
<summary>UC-2 Sequence Diagram_v3</summary>  
  
![image](https://user-images.githubusercontent.com/59490892/118222706-0d4d8400-b4bb-11eb-93c4-0bd3d2310085.png)

</details>


---

### UC-3 Logout

<details>
<summary>UC-3 Sequence Diagram_v1</summary>  
  
![001](https://user-images.githubusercontent.com/59490892/117540902-4c5b7f80-b04c-11eb-879a-be96eeac3172.JPG)

</details>

<details>
<summary>UC-3 Sequence Diagram_v1 feedback</summary>  
   
- [이한용] **logout()**함수에 **email**이 parameter로 들어가야 할 것 같습니다. 
controller에서 validation 과정도 있으면 좋을거 같아요.
- [정나린] 로그아웃 이후에 접근 권한이 없어지는 것을 표현하지 않아도 될는지 잘 모르겠습니다.

</details>

<details>
<summary>UC-3 Sequence Diagram_v2</summary>  
  

</details>
