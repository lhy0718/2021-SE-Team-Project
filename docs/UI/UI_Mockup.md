# UI Mockup

1. [로그인 페이지](#1-로그인-페이지)
2. [회원가입 페이지](#2-회원가입-페이지)
3. [메인 페이지 - 선생](#3-메인-페이지---선생)
4. [메인 페이지 - 학생](#4-메인-페이지---학생)
5. [수업상세 페이지](#5-수업상세-페이지)

---
## 1. 로그인 페이지

### a) 로그인 페이지
![Login](https://user-images.githubusercontent.com/76427521/120102505-57ef2180-c186-11eb-91b7-a79e9ccb7ee2.png)
- 왼쪽 메뉴바로 현재 어느 페이지에 있는지 확인
- 아이디와 비밀번호 입력 후 `로그인` 버튼 누르면 메인페이지로 이동
- 중앙에 위치한 `회원가입` 버튼을 누르면 회원가입 페이지로 이동

### b) 로그인 페이지(로그인 실패)
![login_fail](https://user-images.githubusercontent.com/76427521/120102559-908efb00-c186-11eb-8c17-8cefcec0a52f.png)
- 아이디 혹은 비밀번호가 잘못되었을 경우 오류 메세지 팝업
- `확인` 누르면 팝업창 없어지고  로그인-a 페이지로 이동

---

## 2. 회원가입 페이지

### a) 회원가입 1단계 (신분 선택)
![Auth_Select](https://user-images.githubusercontent.com/76427521/120102578-a8667f00-c186-11eb-83e3-64b4801c7bb5.png)
- `학생` 혹은 `교사` 버튼을 누르고, `다음` 버튼을 누르면 회원가입 2단계로 이동
- `이전` 버튼 누르면, 로그인 페이지로 이동

### b) 회원가입 2단계 (개인정보 입력)
-Teacher Version
![Teacher_SighUp](https://user-images.githubusercontent.com/76427521/120102597-be743f80-c186-11eb-8256-498f14a62b34.png)

-Student Version
![Student_SignUp](https://user-images.githubusercontent.com/76427521/120102618-d51a9680-c186-11eb-9eea-f8ab9c4ca0c6.png)

- 학년, 반, 번호: 드롭다운 버튼
- `이전` 버튼 누르면 회원가입-1단계로 이동
- `다음` 버튼 누르면 회원가입 성공 또는 실패
- 학번은 `학년, 반 번호`를 조합해서 생성. (ex. 2학년 3반 21번 → 20321)

### c) 회원가입 실패
![signup_fail](https://user-images.githubusercontent.com/76427521/120102651-fc716380-c186-11eb-9c5e-4de17814f233.png)
- 아이디 중복 여부, 비밀번호 일치여부, 이메일주소 양식 적합 여부
- `이전` 버튼 누르면 회원가입-1단계로 이동
- `다음` 버튼 누르면 회원가입 성공 또는 실패

---

## 3. 메인 페이지 - 선생
![Teacher_MyLecture](https://user-images.githubusercontent.com/76427521/120102683-262a8a80-c187-11eb-86a9-2b1763f04392.png)

- 수업목록 우상단 `수업 추가` 버튼 클릭 시 d(교사용 수업 추가 Pop-up)이 떠야 함
- 출석체크 버튼 클릭 시 4(수업 상세) 페이지로 이동
- 왼쪽 메뉴바에서 `나의 수업 조회`를 제외한 나머지는 구현하지 않음
- 출석 체크 버튼을 누르면 e(차시 입력) Pop-up이 뜨고, 차시 정보를 입력받음.

### 수업 추가 PopUp
![Teacher_AddLecture_Popup](https://user-images.githubusercontent.com/76427521/120102705-45291c80-c187-11eb-9b67-3a4e90c62ff9.png)
- 수업 교시 선택하는 부분을 드롭박스로 변경함 
- ex) 월1, 수3 수업 ⇒ "[요일]: 월, [교시]: 1"  + "[요일]: 수, [교시]: 3"

### 차시 입력 PopUp
![차시입력 pop-up](https://user-images.githubusercontent.com/76427521/120102750-86213100-c187-11eb-8661-c15a98b2f66b.png)
- 차시 드롭박스에는 1~20(예시) 까지가 존재하고, `차시 추가` 버튼을 누르면 드롭박스의 항목이 추가(이전 숫자 이어서)되고 `차시 삭제` 버튼을 누르면 드롭박스의 마지막 항목이 삭제됨

## 4. 메인 페이지 - 학생
![Student_MyLecture](https://user-images.githubusercontent.com/76427521/120102726-668a0880-c187-11eb-8102-443b24b0815e.jpg)
- 출결현황 조회 버튼은 버튼만 존재, 실제로 구현하지 않음
- 왼쪽 메뉴바에서 '나의 수업 조회'와 '수강신청'만 구현
- 오른쪽 상단의 알림버튼 또한 구현 안 함
- 왼쪽 메뉴바에서 `수강신청` 클릭 시 b(학생용 수강신청) 페이지로 이동
  
![Student_AvailableLecture](https://user-images.githubusercontent.com/76427521/120102720-5f62fa80-c187-11eb-949f-6250ae45f8fd.jpg)
- 전체 수업목록 안의 신청버튼은 구현되어야 함
- 왼쪽 메뉴바에서 `나의 수업 조회` 클릭 시 a(학생용 나의 수업 조회) 페이지로 이동

---

## 5. 수업상세 페이지
![Teacher_AtdCheck](https://user-images.githubusercontent.com/76427521/120102783-a650f000-c187-11eb-8fe6-56704b9b2527.png)
- Checked는 출결체크 한 학생의 숫자
- Search기능은 UI만 존재, 실제로는 구현 X
- 수업종료 버튼 클릭시 `나의 수업 조회` 페이지로 이동 (출석 데이터는 autosave 된다고 가정)
- 학생사진은 default 사진으로 설정