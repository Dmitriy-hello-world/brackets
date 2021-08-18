module.exports = function check(str, bracketsConfig) {
  let stack = [],
      bracketsObg = {},
      bracketsArr = [];

  bracketsConfig.forEach( arr => {
    bracketsObg[arr[1]] = arr[0];
    bracketsArr.push(arr[0]);
  });

  for (let i = 0; i < str.length; i++) {
    let countLeter = str[i];

    if (bracketsArr.includes(countLeter) && countLeter != '|') {
      if (bracketsObg[countLeter] != countLeter) {
        stack.push(countLeter);
      } else {
        if (stack[stack.length - 1] == countLeter) {
          stack.pop();
        } else {
          stack.push(countLeter);
        }
      }
    } else if (bracketsArr.includes(countLeter) && countLeter == '|') {
      if (stack[stack.length - 1] == '|') {
        stack.pop();
      } else {
        stack.push(countLeter);
      }
    } else {
      if (stack[stack.length - 1] == bracketsObg[countLeter]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length == 0;
};