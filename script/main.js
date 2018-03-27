function getIdPw(){
var id = prompt('ID입력','');
var password = prompt(id+'가 사용할 초기 비번 입력','');
localStorage.setItem('id',id);
localStorage.setItem('password',password);
}
var password = localStorage.getItem('password');
if (!password) {
getIdPw();
} 

var id = localStorage.getItem('id');
var heading = document.querySelector(h1);
heading.innerHTML = id + 'Homepage';