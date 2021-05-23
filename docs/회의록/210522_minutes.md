# 2021. 05. 22 (토) 회의록  
___
* **일시**: 2021.05.22(토) 19:00 ~ 20:30
* **참석자**: 김지혜, 박종혁, 윤진호, 이한용, 정나린, 진겸 (총 6명)

* **사전 준비사항**: UI 그리기, ERD 작성 완료
* **회의 목적**: 개발 환경 구축 外
___
## 회의 내용  

<b>1. UI 신규 피드백</b>
- 출석체크 누를 때, 차시 선택해서 수업관리 페이지로 넘어가야 함
- 교사용 페이지에서 `수업관리` 메뉴를 `나의 수업 조회`로 통일 (`수업관리`는 구현 안 함) 
- 수업추가 popup에서 dropbox 형식으로 변경(요일, 시간 따로)


<b>2. WIP 및 논의사항</b>
- IDE는 VS Code로 통일
- 도커(Doker), node.js 설치
- VS Code 확장프로그램: 프리티어(Prittier/code formatting용), vsIntelliCode 설치 -> 프리티어는 항상 on 상태 유지할 것
- 프론트 CSS: Ant Design(디자인 라이브러리) 사용

<b>3. Git flow (Description)</b>
- feature branch(login branch)를 만든 후에 에러가 나지 않는 부분에 한해서 develop branch로 merge(pull-request)
- develop branch에만 push, 이후에 master branch로 merge(함부로 master branch에 merge하지 말 것)
- 각 feature branch끼리 필요한 것은 merge하여 사용

<b>4. 기타</b>
- pakage.json: 필요한 모듈들이 등록되는 파일
- yarn.clock: 수정 또는 변경 금지
- 1차 마감기한: 05/26(수)
___
## 다음 회의  
* **일시**: 미정
  
###### 끝.
