for (let fizzbuzz = 1; fizzbuzz <= 100; fizzbuzz += 1) {
  if (fizzbuzz % 3 == 0 && fizzbuzz % 5 == 0) {
    console.log ("Fizzbuzz");
  }
  else if (fizzbuzz % 3 == 0) {
    console.log ("Fizz");
  }
  else if (fizzbuzz % 5 == 0) {
    console.log ("Buzz");
  }

  console.log(fizzbuzz);
}
