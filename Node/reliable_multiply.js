function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.
  for (;;){
  try {
    return primitiveMultiply(a, b);
    break;
  } catch (e){
    if (!e instanceof MultiplicatorUnitFailure){throw e}
  }
}
}

console.log(reliableMultiply(8, 2));
// → 64
