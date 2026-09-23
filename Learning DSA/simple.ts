const userYear = 1990;
const currentYear = 2025;

let age = currentYear - userYear;
const nextleapYear = 2028;
let more = nextleapYear - currentYear;
let left = 4 - more;
let count = 0;
console.log(left);

for (let i = 0; i <= age; i++) {
  if (left === 0) {
    count++;
    left = 4;
  }
  left--;
}
console.log(count);
let inDays = (age - count) * 365 + count * 366;
console.log(inDays);
