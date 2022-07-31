export function category(num) {
  if (num === 5) {
    // 5
    return 7;
  }
  if (num % 10 === 0) {
    // 10, 20, 30, ...
    return 2;
  }
  if (num % 5 === 0) {
    // 15, 25, 35, ...
    return 3;
  }
  let s = num.toString();

  if (s.length > 1 && [...new Set(s.split(""))].length === 1) {
    // repdigit (11, 22, 33, ...)
    return 5;
  } else {
    return 1;
  }
}
