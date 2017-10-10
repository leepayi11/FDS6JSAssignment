// 1. 1 부터 10, 000 까지 8 이라는 숫자가 총 몇번 나오는가 ?

function getCount8(a) {
  var str = ''; //typeof(빈문자열 + 숫자) = String
  var count = 0;
  for (var i = 0; i < a + 1; i++) {
    str += i; //전역변수로 for문 밖에있는 변수 재할당
  }
  for (var j = 0; j < str.length; j++) {
    if (str[j] === '8') {
      count++; //전역변수로 for문 밖에있는 변수 재할당
    }
  }
  return count;
}
console.log(getCount8(10000)); // 4000

// 2. 짝수와 홀수_if문, 삼항연산자

// if문
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd2(num2) {
  var res = num2 % 2 ? 'Odd' : 'Even'; // 1(True) : 0(False)
  return res;
}
console.log(evenOrOdd2(2)); // Even
console.log(evenOrOdd2(3)); // Odd
console.log(evenOrOdd2(1000)); // Even


/* 3. 문자열 다루기
alphaString46 함수는 문자열 s를 매개변수로 입력받는다.s의 길이가 4~6 이고, 
숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다*/

function alphaString46(s) {
  if (3 < (s.length)) {
    for (var i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      } else {
        return true;
      }
    }
  }
  return false;
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('12x3fd')); // false