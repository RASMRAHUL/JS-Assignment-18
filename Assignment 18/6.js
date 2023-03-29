function* exceptionGenerator() {
    try {
      yield 'This value will be returned';
      throw new Error('Something went wrong');
    } catch (e) {
      yield `Caught exception: ${e.message}`;
    }
  }
  
  const gen = exceptionGenerator();
  
  console.log(gen.next().value); // This value will be returned
  console.log(gen.throw(new Error('Error message')).value); // Caught exception: Error message
  