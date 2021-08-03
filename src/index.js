module.exports = function reverse (n) {
  let rev = parseFloat(n.toString().split('').reverse().join(''));
  return rev;
}
