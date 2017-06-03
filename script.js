/* Rewrite code from using ‘for’ to using ‘while’
 */
function useWhileinsteadFor() {
  var i = 0;

  while (i < 5) {
    console.log(`number ${i}  =)`);
    i++
  }
}
 
/*- Display numbers from 1 to 15 using ‘for’ loop,
once num of iteration is equal the num of month of your birthday then stop execution of loop*/
bdBreak()
function bdBreak() {
  var i = 1;

  for (; i < 15; i++) {
      if (i <= 10) {
      break;
    }
  }
    console.log(i);
}

/* Write code which will ask user (prompt ) to put number greater than 100, repeat
prompt until user put required number, then display result of prompt. Do it using ‘while’ */
doRepeat()
function doRepeat() {
  var a = 0;

  while (isNaN(parseFloat(a)) || (a <= 100)) {
     a = prompt('Enter number greater than 100');
  }

  alert('Congratulation, you number is greater than 100');
}

/*Write code which will ask user (prompt ) to put number greater than 100, repeat
prompt until user put required number, then display result of prompt. Do it using ‘do while’*/
doRepeatDoWhile()
function doRepeatDoWhile() {
  var a = 0;

  do {
    a = prompt('Enter number greater than 100');
  } while (isNaN(parseFloat(a)) || (a <= 100));

  alert('Congratulation, your number is greater than 100');
}
