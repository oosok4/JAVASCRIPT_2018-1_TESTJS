function getIdPw(){
    var id = prompt('ID입력','');
    var password = prompt(id+'가 사용할 초기 비번 입력','');
    localStorage.setItem('id',id);
    localStorage.setItem('password',password);

    var password = localStorage.getItem('password');
    if (password === '12345') {
        alert('환영합니다.')
        localStorage.setItem('id',id);
        var id = localStorage.getItem('id');
        var myHeading = document.querySelector('h1');
        myHeading.innerHTML = id + '<br>Homepage';
    }
    else if(password === ''){
        alert('아이디 또는 비밀번호를 입력하세요.');
        getIdPw();
    }
    else{
        alert('비밀번호가 잘못 입력되었습니다.');
        getIdPw();
        }
    }
    var myButton = document.querySelector('button');
    myButton.onclick = function (){
        getIdPw();
    }

/*var id = localStorage.getItem('id');
var heading = document.querySelector(h1);
heading.innerHTML = id + 'Homepage'; 

var myHeading = document.querySelector('h1');
var id = localStorage.getItem('id');
myHeading.innerHTML = id + '<br>홈페이지';

/*function getIdPw() {
    var id = prompt('ID입력', '');
    alert(id + '가 로그인 함');
    localStorage.setItem('id', id);
    var passwordsystem = '12345';
    var password = prompt('PW입력', '');
    if (password === passwordsystem) alert('정상로그인!');
    else alert('비밀번호 오류');

}


document.querySelector('h1').onclick = function () {
    getIdPw();

}//function이라는 함수의 정의(선언)이 없어도 사용이 가능하다.

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/mokwon.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }//document라는 전체 객채중에서 함수객체를 선택하고 그중에 이미지를 클릭할수 있는 함수를 주고 클릭하면 이미지가 변환
}

var mybutton = document.querySelector('button');
mybutton.onclick = function () {
    getIdPw();
}
*/

/*var text = 'this is a text.';
text = 10.5; //이렇게 지맘대로 타입을 바꿔줘도 탈이 없는게 자바스크립트의 특징.
var a = 33.7;
var b = a*text;
//alert(b); // 경고문 띄울 때 사용됨
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('iceCream');    
} else {
  alert('chocolate');    
} 조건문*/
