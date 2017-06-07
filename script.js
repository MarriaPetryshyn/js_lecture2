/* 1 Find and display total sum of numbers from 1 to 3 */
function totalSum(a, b, c) {
  return a + b + c;
}
document.getElementById("task-one").innerHTML = totalSum(1, 2, 3);

/* 2 Find and display total sum of numbers from 20 to 220 */
function totalSumFromTo() {
    var n = 0;
    for (var i = 20; i <= 220; i++) {
        n += i;
    }
    console.log(n);
}
totalSumFromTo()

/* 3 Display even numbers from 1 to 20 by using for loop. */
function evenWithoutContinue() {
  var i = 1;
  while (i <= 20) {
    i = i + 1;
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenWithoutContinue()

/* 4 Display even numbers from 1 to 20 by using for loop. */
function evenWithoutContinue() {
  var i = 0;
  while (i <= 20) {
    i = i + 1;
    if (i % 2 !== 0) {
      continue;
    }
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenWithoutContinue()

/* 5 Display odd numbers from 10 to 30 by using ‘while’ loop*/
function oddNumbersWithWhile() {
  var i = 10;
  while (i < 30) {
    i = i + 1;
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
oddNumbersWithWhile()

/*- 6 Display numbers from 1 to 15 using ‘for’ loop,
once num of iteration is equal the num of month of your birthday then stop execution of loop*/
function bdBreak() {
  var i = 1;

  for (; i < 15; i++) {
      if (i <= 10) {
      break;
    }
  }
    console.log(i);
}
bdBreak()

/* 7 Rewrite code from using ‘for’ to using ‘while’
 */
function useWhileinsteadFor() {
  var i = 0;

  while (i < 5) {
    i++
    console.log(`number ${i}  =)`);
  }
}
useWhileinsteadFor()

/* 8 Write code which will ask user (prompt ) to put number greater than 100, repeat
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
	for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= i; j++) {
      document.write("#");
    }
  	document.write('<br />');
	}
}
