# JavaScript_JQuery_02

JQuery

셀렉터(Selector)
HTML 문서안의 요소를 찾는 방법이다.

태그(body,div,span,a,etc..)<br>
아이디(id='footer')<br>
클래스(class='container')<br>

이 3가지를 주로 찾게 된다.

태그 : $("a")<br>
아이디 : $("#footer") #사용<br>
클래스 : $(".container") .사용<br>

그 안에있는 자식요소를 선택하려면 .을 사용해서 선택하면된다
<div id="footer">
<a class="btn" href=""></a>
이렇게 돼있으면 , $("#footer.btn")
