# Detailed Use Cases

## Use Cases

이 링크를 참고 : [link](/FormCreateUpdate/UseCases.md)
## Use Case 1

Use Case UC-1 :| AddClass
--|--
Related Requirements:|ST-1, ST-7
Initiating Actor:|User
Actor’s Goal:|수업 목록에 수업을 추가하기 위함
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
Actor’s Goal:|수업 목록에서 수업을 수정하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업 수정 버튼은 수업 목록의 수업명 우측에 위치한다.
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
Actor’s Goal:|수업 목록에서 수업을 삭제하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업 삭제 버튼은 수업 목록의 수업명 우측에 위치한다.
Postconditions:|수업이 DB에서 삭제된다
||**Flow of Events for Main Success Scenario:**
||1. 사용자가 수업 삭제 버튼을 선택한다.
||2. ‘수업을 삭제하시겠습니까?라는 문구와 함께 하단에 예, 아니오 버튼이 뜬다. <li> 예: 수업명과 동일한 값을 갖는 DB에서 삭제시킨 뒤 삭제 완료 알림창이 나온다. 그리고 수업목록페이지로 이동한다.</li> <li> 아니오: 수업목록페이지로 이동한다.</li>

## Use Case 4

Use Case UC-4 :| AddStudent
--|--
Related Requirements:|ST-1, ST-7
Initiating Actor:|User
Actor’s Goal:|학생 목록에서 학생을 추가하기 위함
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
Actor’s Goal:|학생 목록에서 학생을 수정하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업목록페이지에서 한 수업을 선택해야 한다.
||학생 수정 폼이 존재해야 한다.
||학생목록의 학생명 우측에 학생 수정버튼이 존재한다.
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
Actor’s Goal:|학생 목록에서 학생을 삭제하기 위함
Participating Actors:|Database
Preconditions:|사용자는 정상적으로 로그인이 완료되어 있어야 한다.
||수업목록페이지에서 한 수업을 선택해야 한다.
||학생 수정 폼이 존재해야 한다.
||학생 목록의 학생명 우측에 학생 삭제버튼이 존재한다.
Postconditions:|학생에 대한 정보가 DB에서 삭제된다.
||**Flow of Events for Main Success Scenario:**
||1. 사용자가 학생 삭제 버튼을 선택한다.
||2. ‘학생을 삭제하시겠습니까?라는 문구와 함께 하단에 예, 아니오 버튼이 뜬다. <li> 예: 학생명과 동일한 값을 갖는 DB에서 삭제시킨 뒤 삭제 완료 알림창이 나온다. 그리고 학생목록페이지로 이동한다.</li> <li>아니오: 학생목록페이지로 이동한다.</li>
