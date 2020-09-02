const clock = document.querySelector(".clock") //클래스갖고오기 .
const h1 = document.querySelector("h1") //태그 갖고오기 그냥 태그이름쓰면된다
function getTime() {
  const clockTest = new Date() //시간을갖고온다 변수하나 설정하구 new Date()
  console.log(clockTest)

  const hour = clockTest.getHours()
  const minute = clockTest.getMinutes()
  const second = clockTest.getSeconds()
  h1.innerText = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute} : ${
    second < 10 ? `0${second}` : second
  }`
}
function init() {
  getTime()
  setInterval(getTime, 1000)
}
init()
