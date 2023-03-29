function* multiplyGenerator() {
  const result = yield 'Enter two numbers to multiply: ';
  const [num1, num2] = result.split('*');
  yield `${num1} * ${num2} = ${num1 * num2}`;
}

const gen = multiplyGenerator();

console.log(gen.next().value); // Enter two numbers to multiply:
console.log(gen.next('2*2').value); // 2 * 2 = 4
