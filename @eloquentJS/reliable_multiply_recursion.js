function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Your code here.

  try {
    return primitiveMultiply(a, b);
  } catch (e){
    if (!e instanceof MultiplicatorUnitFailure){throw e}
    else {
      return reliableMultiply(a,b);
    }
  }
}


console.log(reliableMultiply(12, 8));
// → 64
