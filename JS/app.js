//날짜 변수
var now = new Date();
var new_year = now.getFullYear(),
  new_month = now.getMonth();

//특정 연월을 시작일부터 조회
var d = new Date(new_year, new_month, 1);

//월별 일수 구하기
var d_length = 32 - new Date(new_year, new_month, 32).getDate();
var date = d.getDate();
var day = d.getDay();
