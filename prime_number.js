let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  if (num <= 1) {
    console.log("No");
  } else if (isPrime) {
    console.log("Yes");
  } else {
    console.log("No");
  }