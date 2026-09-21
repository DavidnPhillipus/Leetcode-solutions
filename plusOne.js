let digits = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]; //[1 ,2 ,3]   [4, 3, 2, 1]

function plusOne(digits) {
  for (i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      if (i > 0) {
        digits[i] = 0;
        continue;
      }
      digits[i] = 0;
      digits = [0, ...digits];
    }
    digits[i] = digits[i] + 1;
    console.log(digits);
    break;
  }
}

plusOne(digits);
