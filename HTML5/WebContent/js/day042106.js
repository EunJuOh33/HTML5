let num;
num = 10;
alert(num);	/* 자바 스크립트가 기본적으로 가지고 있는 메서드. 경고창을 뜨운다. */
console.log(num + 10);	/* 개발자도구 - 콘솔 창에 20이 출력된다. */

for(let i=0; i<5; i++) {
	console.log(i);
}

//console.log("현재 i의 값: " + i);

num = 50;
console.log(num);
/* 변수는 원래 값을 바꿔서 사용할 수 있다. */

const num2  = 100;
//num2 = 1000;
console.log(num2);
/* const는 상수 */


//--------------------- 자바스크립트의 배열 -------------------------------//

//String[] fruits = {"사과", "바나나"}; 	//자바의 코드
//String[] fruits = new String[] {"사과", "바나나"};	//자바의 코드
/* 자바와 초기화 방식이 다르다. 대괄호를 사용한다. 
 * 이 방법을 더 많이 사용한다.*/
let fruits = ["사과", "바나나"];
for(let i=0; i<fruits.length; i++) {
	console.log(fruits[i]);	//사과 바나나 출력 
}
/* 두 번째 방법 */
fruits = new Array("사과", "바나나");
for(let i=0; i<fruits.length; i++) {
	console.log(fruits[i]);
}


fruits["a"] = "파인애플";	//인덱스번호를 문자로 사용할 수 있다.
console.log(fruits["a"]);
console.log(fruits.length);	// 2 출력
							// 문자 인덱스는 배열의 요소 개수에 포함되지 않는다.
fruits[100] = 3.141592;	//다른 자료형이 들어가도 된다.
console.log(fruits[100]);
//인덱스 번호는 원하는 번호를 사용해도 된다.
//자바의 배열처럼 크기가 고정되지 않는다.
console.log(fruits.length); // 101이 출력된다.(0~100까지)

//자바 스크립트의 벼열은 자바의 컬렉션 역할도 한다.
let arr = new Array();
arr.push(10);
arr.push(20);
arr.push(30);

for(let i=0; i<arr.length; i++) {
	console.log(arr[i]);	// 10 20 30
}

console.log("팝사용");
console.log(arr.pop());
console.log(arr.pop());
for(let i=0; i<arr.length; i++) {
	console.log(arr[i]);	// 팝사용 30 20 10
}


console.log("언시프트 사용");
arr.unshift(100);
for(let i=0; i<arr.length; i++) {
	console.log(arr[i]);	// 언시프트 사용 100 10
}