server readme.md입니다

서버 시작하기 전

./local-festival/server
환경변수 설치 해주시고 // npm install

mysql (로컬)
mysql에 접속하셔서 // mysql -u root -p
데이터베이스 local_festival 만들고 // create database local_festival

mysql (배포) // \* 2차 배포시에 user를 admin으로 하지 말고 root로 해주세요.
rds에 접속 (admin)
mysql -u admin --host local-festival.cckvitmvdr6s.ap-northeast-2.rds.amazonaws.com -P 3306 -p

ec2에서 schema.sql 파일 실행하기
mysql -u admin --host local-festival.cckvitmvdr6s.ap-northeast-2.rds.amazonaws.com -P 3306 -p < schema.sql -p -Dlocal_festival

./local-festival/server
서버터미널에서 스키마 해서 필드 만들면 됩니다. // npm run schema
이후 필드에 데이터를 채워주시면 됩니다. // npm run db, npm run db2
이후 ctal+c / cmd+c 하셔서 종료 해주시면 festival 데이터 저장됩니다.
