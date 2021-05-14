# Sequence diagram

### UC-1 InquireClassList
<details>
<summary>UC-1 sequence diagram v1</summary>
</br>

![Teacher-SD-UC1](https://user-images.githubusercontent.com/76427521/117755815-e9d6cf00-b257-11eb-91d1-1197be7e54d2.PNG)

</details>

---

### UC-2 AddClass
<details>
<summary>UC-2 sequence diagram v2</summary>
</br>

![Teacher Sequence Diagram-UC-2](https://user-images.githubusercontent.com/11364584/117861416-61dedc80-b2cc-11eb-9165-8ac94ba57f10.jpg)

**val1**은 form의 input값의 type이나 range에 대한 유효성이고, **val2**는 서버에 도착한 request 구문이 유효한지 또는 form에 누락된 데이터는 없는지에 대한 유효성으로 구상함. 따라서 **val2**가 false이면 **400 Bad Request**으로 error code를 반환하도록 했음.
</details>

<details>
<summary>UC-2 sequence diagram v3</summary>
</br>

![Teacher Diagrams-UC-2_v3](https://user-images.githubusercontent.com/11364584/118148061-29b1d800-b44b-11eb-9b75-eb6a626c2661.jpg)

상황에 따라 다르게 받던 Status Code를 하나의 변수를 리턴 받는 것으로 추상화 함
</details>

---

### UC-5 InquireEnrolledStudent
<details>
<summary>UC-5 sequence diagram</summary>
</br>

![슬라이드1](https://user-images.githubusercontent.com/64057843/117558537-59628800-b0b9-11eb-84ae-7630630aa4db.PNG)
![슬라이드2](https://user-images.githubusercontent.com/64057843/117558541-5bc4e200-b0b9-11eb-91c0-222efad55566.PNG)
</details>

<details>
<summary>UC-5 sequence diagram v2</summary>
</br>

![uc5(ver2)](https://user-images.githubusercontent.com/64057843/117838311-30a6e200-b2b5-11eb-9cbb-3c2bbe17d05f.png)

</details>

---

### UC-6 CheckAttendance
<details>
<summary>UC-6 sequence diagram v1</summary>
</br>

![UC-6_1](https://user-images.githubusercontent.com/11364584/117560848-5b821200-b0cc-11eb-94e7-75db88c39043.jpeg)
![UC-6_2](https://user-images.githubusercontent.com/11364584/117560849-5de46c00-b0cc-11eb-8b14-29691dfa1a62.jpeg)
![UI_mockup](https://user-images.githubusercontent.com/11364584/117560871-a3089e00-b0cc-11eb-80c1-70b7be97ed55.jpeg)
</details>

<details>
<summary>UC-6 sequence diagram v2</summary>
</br>

![Teacher Sequence Diagram-UC-6](https://user-images.githubusercontent.com/11364584/117664358-a7bc7780-b1dc-11eb-855e-3ab69d6d7594.jpg)

**val**은 request 구문이 유효한지 또는 누락된 데이터는 없는지에 대한 유효성으로 구상함. 따라서 val이 false이면 **400 Bad Request**으로 error code를 반환하도록 했음.
</details>

<details>
<summary>UC-6 sequence diagram v3</summary>
</br>

![Teacher Sequence Diagram-UC-6_v3](https://user-images.githubusercontent.com/11364584/118094575-de2b0a00-b409-11eb-906c-710d56d51dc3.jpg)


상황에 따라 다르게 받던 Status Code를 하나의 변수를 리턴 받는 것으로 추상화 함. **addClassService**를 **classService**로 변경
</details>