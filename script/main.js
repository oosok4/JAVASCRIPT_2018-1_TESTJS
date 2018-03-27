var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'cloude Service<br>HELLO';
var text = 'this is a text.';
text = 10.5; //이렇게 지맘대로 타입을 바꿔줘도 탈이 없는게 자바스크립트의 특징.
var a = 33.7;
var b = a*text;
//alert(b); // 경고문 띄울 때 사용됨
var iceCream = 'chocolate';
/*if (iceCream === 'chocolate') {
  alert('iceCream');    
} else {
  alert('chocolate');    
} 조건문*/

var id = prompt ('ID입력','');
alert(id+'가 로그인 함');
var passwordsystem = '12345';
var password = prompt ('PW입력','');
if (password === passwordsystem) alert('정상로그인!');
else alert('비밀번호 오류');