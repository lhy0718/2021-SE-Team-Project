# ERD
![ERD](https://user-images.githubusercontent.com/76427521/120103846-8bcd4580-c18c-11eb-8546-f1e204ebba25.png)

## User
- PK: uId bigint NOT NULL (유저 고유 번호)
- email string NOT NULL (이메일)
- password string NOT NULL (비밀번호)
- fullName string NOT NULL (이름)
- role ENUM('STUDENT','TEACHER') NOT NULL (유저타입 학생/교사)
- phone string (전화번호)
- grade int (학년, 학생에만 유효)
- classId int (반, 학생에만 유효)
- studentId int (번호, 학생에만 유효)

## Lecture
- PK :uId int NOT NULL (강의 고유 번호)
- lectureName string NOT NULL (강의명)
- FK :teacherId bigint NOT NULL (교수자 고유 번호)
- grade int NOT NULL (학년)
- classId int NOT NULL (반)
- lectureId string NOT NULL (강의 코드)

## Attendance
- PK,FK: studentId bigint NOT NULL (학생 고유 번호)
- PK,FK: lectureId int NOT NULL (강의 고유 번호)
- PK: classNumber int NOT NULL (수업 차시)
- attendanceType ENUM('attendance','absent','tardy','etc') (출석타입)

## LectureTime(강의 시간 리스트)
- PK,FK: lectureId int NOT NULL (강의 고유 번호)
- PK: weekDay int NOT NULL (요일)
- PK: period int NOT NULL (교시)

## User Lecture List(유저 수강  or 수업 강의 리스트)
- PK,FK: uId bigint NOT NULL (유저 고유 번호)
- PK,FK: lectureId int NOT NULL (강의 고유 번호)