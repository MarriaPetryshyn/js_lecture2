/* 1. Find and display total sum of numbers from 1 to 3 */
function totalSum(a, b, c) {
  return a + b + c;
}
document.getElementById("task-one").innerHTML = totalSum(1, 2, 3);

/* 2. Find and display total sum of numbers from 20 to 220 */
function totalSumFromTo() {
  var n = 0;

  for (var i = 20; i <= 220; i++) {
      n += i;
  }
  document.getElementById("task-two").innerHTML = n;
}
totalSumFromTo()

/* 3.1 Display even numbers from 1 to 20 by using for loop. */
function evenWithoutContinue() {
  var text = " ";
  var b = 1;

  while (b <= 20) {
    b = b + 1 ;
    if (b % 2 == 0) {
      text += b + " ";
      document.getElementById("task-three").innerHTML = text;
    }
  }
}
evenWithoutContinue()

/* 3.2 Display even numbers from 1 to 20 by using for loop. */
function evenWithContinue() {
  var p = 0;

  while (p <= 20) {
    p = p + 1;
    if (p % 2 !== 0) {
      continue;
    }
    if (p % 2 == 0) {
      console.log(p);
    }
  }
}
evenWithContinue()

/* 4 Display odd numbers from 10 to 30 by using ‘while’ loop*/
function oddNumbersWithWhile() {
  var text = " ";
  var k = 10;

  while (k < 30) {
    k = k + 1;
    if (k % 2 == 1) {
      text += k + " ";
      document.getElementById("task-four").innerHTML = text;
    }
  }
}
oddNumbersWithWhile()

/*- 5 Display numbers from 1 to 15 using ‘for’ loop,
once num of iteration is equal the num of month of your birthday then stop execution of loop*/
function bdBreak() {
	var text = " ";
  for (var h = 1; h <= 15; h++) {
    if (h > 10) {
    break;
    }
  text += h + " ";
	document.getElementById("task-five").innerHTML = text;
  }
}
bdBreak()

/* 6 Rewrite code from using ‘for’ to using ‘while’
 */
 function useWhileinsteadFor() {
  var text = " ";
  var i = 0;

  while (i < 5) {
    i++
    text += "number" + " " + i + " " + "=) <br>";
    document.getElementById("task-six").innerHTML = text;
  }
 }
 useWhileinsteadFor()

/* 7 Write code which will ask user (prompt ) to put number greater than 100, repeat
prompt until user put required number, then display result of prompt. Do it using ‘while’ */
function doRepeat() {
  var a = 0;

  while (isNaN(parseFloat(a)) || (a <= 100)) {
    a = prompt('Enter number greater than 100');
  }

  alert('Congratulation, you number is greater than 100');
}
doRepeat()

/*8 Write code which will ask user (prompt ) to put number greater than 100, repeat
prompt until user put required number, then display result of prompt. Do it using ‘do while’*/
function doRepeatDoWhile() {
  var a = 0;

  do {
    a = prompt('Enter number greater than 100');
  } while (isNaN(parseFloat(a)) || (a <= 100));

  alert('Congratulation, your number is greater than 100');
}
doRepeatDoWhile()

/*9 Show in console using for*/
function hashtagFunnyFunction() {
  var str = '';

  for(var i = 0;i<8;i++) {
    str = str + '#';
    console.log(str);
  }
}
hashtagFunnyFunction()
