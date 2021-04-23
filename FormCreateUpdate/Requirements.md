# User Story Style Requirements

* **사용자 : 출결관리 시스템을 이용하는 교수자 (교사)**

## Functional Requirements

|Identifier|User Story|Size|
|:--:|:--:|:--:|
|FR-1|나는 교수자로서, 과목 리스트에서 과목을 생성 및 삭제, 수정할 수 있어야 한다.|5|
|FR-2|나는 교수자로서, 학급 리스트에서 학생을 생성 및 수정, 삭제할 수 있어야 한다.|5|
|FR-3|나는 교수자로서, 과목 리스트로 대분류되고 그 안에 학급 리스트로 소분류된 수업 테이블을 제공받아야 한다.|2|
|FR-4|나는 교수자로서, 과목 리스트로 대분류되고 그 안에 학급 리스트로 소분류된 강의 테이블을 제공받아야 한다.|2|

## Nonfunctional Requirements

|Identifier|User Story|Size|
|:--:|:--:|:--:|
|NFR-1|사용자 인풋에 대한 유효성 확인 시간은 짧아야 한다.|2|

## Refined User Stories

|Identifier|User Story|Size|
|:--:|:--:|:--:|
|ST-1|나는 교수자로서, 과목 및 학생 데이터를 생성 및 삭제, 수정할 수 있어야 한다.|6|
|ST-2|나는 교수자로서, 과목 리스트의 대분류와 학급 리스트의 소분류로 정리된 강의 테이블 또는 수업 테이블을 제공받아야 한다.|4|
|ST-3|사용자 인풋에 대한 유효성 확인 시간은 짧아야 한다.|2|

### Rough correspondences

* ST-1 ≈ FR-1 + FR-2
* ST-2 ≈ FR-3 + FR-4
* ST-3 ≈ NFR-1
