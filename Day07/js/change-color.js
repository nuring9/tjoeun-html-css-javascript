var heading = document.getElementById("heading");

var toggle = true;

/*
heading.onclick = function () {
  if (toggle) {
    heading.style.color = "red";
  } else {
    heading.style.color = "blue";
  }
  toggle = !toggle;
};
*/

/* 화살표함수, 삼항연산자 사용 */
heading.onclick = () => {
  heading.style.color = toggle ? "red" : "blue";
  toggle = !toggle;
};
