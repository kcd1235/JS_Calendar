//날짜 변수
var now = new Date();
var new_year = now.getFullYear(),
  new_month = now.getMonth();

//달력 동적으로 출력
function calendar(new_year, new_month) {
  //특정 연월을 시작일부터 조회
  var d = new Date(new_year, new_month, 1);

  //월별 일수 구하기
  var d_length = 32 - new Date(new_year, new_month, 32).getDate();
  var year = d.getFullYear();
  var month = d.getMonth();
  var date = d.getDate();
  var day = d.getDay();

  //caption 정보와 날짜 표시 객체지정
  var caption_year = document.querySelector(".year");
  var caption_month = document.querySelector(".month");
  var start_day = document.querySelectorAll("tr td");

  //테이블 초기화
  for (var i = 0; i < start_day.length; i++) {
    start_day[i].innerHTML = "&nbsp;";
  }

  //한 달치 날짜를 테이블에서 시작 요일부터 순서대로 표시
  for (var i = day; i < day + d_length; i++) {
    start_day[i].innerHTML = date;
    date++;
  }

  //caption 정보와 날짜 표기 객체
  caption_year.innerHTML = year;
  caption_month.innerHTML = month + 1;
}

//메인 처리문
//익명함수 사용
(function () {
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var year = new Date().getFullYear();
  var month = new Date().getMonth();

  calendar(year, month);

  //이전 달, 다음 달 버튼 이벤트 핸들러
  prev.onclick = function () {
    calendar(year, --month);
  };

  next.onclick = function () {
    calendar(year, ++month);
  };
})();
