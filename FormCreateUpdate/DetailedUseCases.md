# Detailed Use Cases

## Use Cases

이 링크를 참고 : [link](/FormCreateUpdate/UseCases.md)
## Use Case 1
Use Case UC-1 :| AddClass
--|--
Related Requirements:|ST-1, ST-7
Initiating Actor:|User
Actor’s Goal:|수업 리스트에 수업을 추가하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업 추가 버튼은 수업목록페이지 좌측 상단에 위치한다.
||수업 추가를 위한 폼이 존재해야 한다.
Postconditions:|새로 추가된 수업이 DB에 저장된다.
||수업을 선택하면 학생목록페이지로 이동한다.
||**Flow of Events for Main Success Scenario:**
||1. 사용자가 수업 추가 버튼을 선택한다.
||2. 수업 추가를 위한 폼으로 이동해, 수업명, 학년도, 학기를 입력한다.
||3. 새로 추가된 수업을 DB에 저장한다.
||4. 사용자는 수업목록페이지로 다시 이동한다.

## Use Case 2
Use Case UC-2 :| UpdateClass
--|--
Related Requirements:|ST-1, ST-7
Initiating Actor:|User
Actor’s Goal:|수업 리스트에서 수업을 수정하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업 수정 버튼은 수업 리스트의 수업명 우측에 위치한다.
||수업 수정을 위한 폼이 있어야 한다.
Postconditions:|수정된 수업이 DB에 저장된다.
||**Flow of Events for Main Success Scenario:**
||1. 사용자가 수업 수정 버튼을 선택한다.
||2. 수업 수정폼으로 이동하고, 수업명, 학년도, 학기를 수정한다.
||3. 수정 혹은 취소 버튼을 클릭한다.    <li> 수정: 수업과 동일한 값을 갖는 DB에 수정된 내용을 저장하고 수업목록페이지로 이동한다.</li> <li>취소: 수업목록페이지로 이동한다.</li>

## Use Case 3
Use Case UC-3 :| RemoveClass
--|--
Related Requirements:|ST-1, ST-7
Initiating Actor:|User
Actor’s Goal:|수업 리스트에서 수업을 삭제하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업 삭제 버튼은 수업 리스트의 수업명 우측에 위치한다.
Postconditions:|수업이 DB에서 삭제된다
||**Flow of Events for Main Success Scenario:**
||1. 사용자가 수업 삭제 버튼을 선택한다.
||2. ‘수업을 삭제하시겠습니까?라는 문구와 함께 하단에 예, 아니오 버튼이 뜬다. <li> 예: 수업명과 동일한 값을 갖는 DB에서 삭제시킨 뒤 삭제 완료 알림창이 나온다. 그리고 수업목록페이지로 이동한다.</li> <li> 아니오: 수업목록페이지로 이동한다.</li>

## Use Case 4
Use Case UC-4 :| AddStudent
--|--
Related Requirements:|ST-1, ST-7
Initiating Actor:|User
Actor’s Goal:|학생 리스트에서 학생을 추가하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업목록페이지에서 한 수업을 선택해야 한다.
||학생 추가 폼이 존재해야 한다.
||학생목록페이지의 우측 상단에 학생 추가버튼이 존재한다.
Postconditions:|학생의 정보가 DB에 저장된다.
||**Flow of Events for Main Success Scenario:**
||1. 사용자가 학생 추가 버튼을 선택한다.
||2. 학생 추가 폼으로 이동해서 학생이름, 학번, 학부모 email주소를 입력한다.
||3. 새로 추가된 학생을 DB에 저장한다.
||4. 사용자는 학생목록페이지로 다시 이동한다.

## Use Case 5
Use Case UC-5 :| UpdateStudent
--|--
Related Requirements:|ST-1, ST-7
Initiating Actor:|User
Actor’s Goal:|학생 리스트에서 학생을 수정하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업목록페이지에서 한 수업을 선택해야 한다.
||학생 수정 폼이 존재해야 한다.
||학생리스트의 학생명 우측에 학생 수정버튼이 존재한다.
Postconditions:|수정된 학생의 정보가 DB에 저장된다.
||**Flow of Events for Main Success Scenario:**
||1. 사용자가 학생 수정 버튼을 선택한다.
||2. 학생 수정 폼으로 이동해서 학생이름, 학번, 학부모id를 수정한다.
||3. 수정 혹은 취소 버튼을 클릭한다. <li>수정: 수업과 동일한 값을 갖는 DB에 수정된 내용을 저장하고 학생목록페이지로 이동한다.</li> <li>취소: 학생목록페이지로 이동한다.</li>

## Use Case 6
Use Case UC-6 :| RemoveStudent
--|--
Related Requirements:|ST-1, ST-7
Initiating Actor:|User
Actor’s Goal:|학생 리스트에서 학생을 삭제하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업목록페이지에서 한 수업을 선택해야 한다.
||학생 수정 폼이 존재해야 한다.
||학생리스트의 학생명 우측에 학생 삭제버튼이 존재한다.
Postconditions:|학생에 대한 정보가 DB에서 삭제된다.
||**Flow of Events for Main Success Scenario:**
||1. 사용자가 학생 삭제 버튼을 선택한다.
||2. ‘학생을 삭제하시겠습니까?라는 문구와 함께 하단에 예, 아니오 버튼이 뜬다. <li> 예: 학생명과 동일한 값을 갖는 DB에서 삭제시킨 뒤 삭제 완료 알림창이 나온다. 그리고 학생목록페이지로 이동한다.</li> <li>아니오: 학생목록페이지로 이동한다.</li>


## Use Case 7

Use Case UC-7 :|InputExceptionAlert
--|--
Related Requirements:|ST-2, ST-4, ST-6, ST-8
Initiating Actor:|Client
Actor’s Goal:|범위를 벗어난 입력에 대해 사용자에게 알린다.
Participating Actors:|User
Preconditions:|사용자가 폼을 입력하여 전송버튼을 클릭한다.
Postconditions:|입력이 유효하지 않다면 사용다에게 에러 메시지를 띄운다.
||입력이 유효하다면 서버에게 폼 데이터를 전송한다.
||**Flow of Events for Main Success Scenario:**
→|1. 사용자가 폼을 입력하고 페이지에 있는 전송버튼(summit)을 클릭한다.
||2. (a)숫자, (b)문자, (c)날짜 등의 입력의 포멧이 맞는지 확인한다.
←|2a. 범위를 벗어난 숫자를 입력하면 오류 메시지를 반환한다.
←|2b. 입력할 수 없는 문자를 입력하면 오류 메시지를 반환한다.
←|2c. 유효하지 않은 날짜를 입력하면 오류 메시지를 반환한다.
←|3. 포멧에 맞지 않는 타입의 데이터를 입력하면 오류 메시지를 반환한다.
←|1a. 서버에서 입력에 대한 오류를 발견했을 때에는 오류정보를 받아서 출력한다.

## Use Case 8

Use Case UC-8 :|RequestExceptionIgnore
--|--
Related Requirements:|ST-2, ST-4, ST-6, ST-8
Initiating Actor:|Server
Actor’s Goal:|중복 또는 비정상적인 요청이 들어오면 무시한다.
Participating Actors:|User
Preconditions:|이미 존재하는 데이터에 대한 추가 요청이 들어온다.
||없는 데이터에 대한 수정 또는 삭제 요청이 들어온다.
||이전에 처리한 중복 요청이 들어온다.
Postconditions:|비정상적인 요청을 내부적으로 무시한다.
||사용자에게 예외처리된 요청을 알린다.
||**Flow of Events for Main Success Scenario:**
→|1. (a)중복 또는 (b)추가할 수 없거나 (c)제거 및 수정할 수 없는 요청이 들어옴
||2. 예외를 내부적으로 감지한다.
←|3. 사용자에게 예외에 대한 메시지를 보낸다.

## Use Case 9

Use Case UC-9 :|ServerResponse
--|--
Related Requirements:|ST-2, ST-3, ST-4, ST-5, ST-6, ST-7, ST-8
Initiating Actor:|Server
Actor’s Goal:|사용자의 입력에 따른 웹 페이지를 전송한다.
Participating Actors:|User
Preconditions:|사용자가 서버에 특정 url을 요청한다.
||클라이언트로부터 사용자의 요청과 디바이스 정보 등이 전송된다.
Postconditions:|요청에 맞는 웹페이지가 클라이언트에 표시된다.
||**Flow of Events for Main Success Scenario:**
→|1. 사용자가 강의를 등록하기 위한 페이지에 접속한다.
←|2. 사용자가 요청한 url에 대응하여 강의 정보를 입력할 수 있는 페이지를 클라이언트로 전송한다.
→|3. 강의정보를 페이지에 입력한 뒤 서버로 전송한다.
||**Flow of Events for Extensions (Alternate Scenarios):**
||1a. 사용자가 등록되지 않은 강의에 대한 페이지를 요청할 때
←|1. 404에러 페이지를 사용자에게 전송한다.
||2. InputExceptionAlert와 RequestExceptionIgnore 포함 (UC-7, UC-8)
||1b. 사용자가 존재하지 않는 하위 페이지를 요청할 때
←|1. 404에러 페이지를 사용자에게 전송한다.
||2. InputExceptionAlert와 RequestExceptionIgnore 포함 (UC-7, UC-8)

## Use Case 10

Use Case UC-10 :|SaveClass
--|--
Related Requirements:|ST-1, ST-3
Initiating Actor:|Server
Actor’s Goal:|수업 테이블을 과목 리스트로 대분류와 학급 리스트로 소분류로 저장한다.
Participating Actors:|User
Preconditions:|사용자에게 데이터를 입력할 수 있는 페이지가 제공된다.
||사용자가 과목이나 학생 데이터를 서버에 전송한다.
Postconditions:|DB에 사용자가 전송한 데이터가 저장된다.
||사용자에게 과목 리스트의 대분류와 학급 리스트의 소분류로 정리된 데이터를 보여줄 수 있다.
||**Flow of Events for Main Success Scenario:**
→|1. 사용자가 데이터를 입력할 수 있는 페이지에 접속한다.
→|2. 사용자가 과목이나 학생 데이터를 서버에 전송한다.
||3. 유효성 건사 후에 데이터를 저장한다.
←|4. 사용자가 데이터를 요구하면 대분류, 소분류로 정리하여 전송한다.
