let num= 15;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
  }
}
if (num <= 1) {
  console.log("No,", num ,"is not a Prime number.");
} else if (isPrime) {
  console.log("Yes,", num, "is a Prime number.");
} else {
  console.log("No,", num ,"is not a Prime number.");
}
