function* naturalNumberGenerator() {
    let number = 1;
    while (true) {
      yield number;
      number++;
    }
  }
  
  const gen = naturalNumberGenerator();
  
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  // and so on...
  