/* 4) 문자열 내 p와 y의 개수
numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 
다르면 false를 리턴하도록 함수를 완성하라. 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다. 
예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.*/

//풀이1_if문

function numPY(s) {
  s = s ? s : '';
  var str = s.toUpperCase();
  var cntP = 0;
  var cntY = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'P') cntP++;
    if (str[i] === 'Y') cntY++;
  }
  return cntP === cntY;
}


//풀이2_정규표현식
function numPY(s) {
  s = s ? s : '';
  var arrP = s.match(/p/ig); //[ 'p', 'P' ]
  var arrY = s.match(/y/ig); //[ 'y', 'Y' ]
  return (arrP ? arrP.length : 0) === (arrY ? arrY.length : 0); //null값은 0으로
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true

/*내코드_빈문자열 에러해결 못함
function numPY(s) {
  var p = s.match(/p/ig);
  var y = s.match(/y/ig);
  if (p.length === y.length) {
    return true;
  }
  return false;
}*/